"use server";

import qs from 'qs';
import { getBlogBySlugQuery, getFeaturedBlogsQuery, getRecentBlogsQuery } from './queries/blogQuery';
import { errResponse } from '../utils';

const endpoint = process.env.STRAPI_API_ENDPOINT;
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`
};

export async function strapiFetch({ path, query, method = 'GET', body, tags, revalidateTime = 60 * 60 * 24 * 365 }) {

    try {
        const url = `${endpoint}${path}${query ? `?${qs.stringify(query, { encodeValuesOnly: true })}` : ''}`; console.log({ url, query });
        const result = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            ...(tags && { next: { tags, revalidate: revalidateTime } })
        });

        let responseBody = null
        if (method !== 'DELETE') responseBody = await result.json();

        if (!result.ok) {
            throw responseBody;
        }

        return {
            status: result.status,
            body: responseBody
        };
    } catch (e) {
        // throw {
        //     error: errResponse(e),
        //     path
        // };
        console.log({ error: e });

        return { error: errResponse(e) }
    }
}

export async function getRecentBlogs({ page, pageSize, sort, search, categories }) {
    const query = getRecentBlogsQuery({ page, pageSize, sort, search, categories });
    const res = await strapiFetch({ path: '/blogs', query, tags: ['blogs'] });
    console.log({ res: res.body.data });
    if (res.error) return { error: res.error }
    
    return { data: res.body.data, count: res.body.meta.pagination.total };
}

export async function getFeaturedBlogs() {
    const query = getFeaturedBlogsQuery();
    const res = await strapiFetch({ path: '/blogs', query, tags: ['blogs'] });
    console.log({ res: res.body.data });
    if (res.error) return { error: res.error }
    
    return { data: res.body.data };
}

export async function getBlogBySlug(slug) {
    const query = getBlogBySlugQuery(slug);
    const res = await strapiFetch({ path: '/blogs', query, tags: ['blogs'] });
    if (res.error) return { error: res.error }
    
    console.log({ res: res.body.data[0] });
    
    return { data: res.body.data[0] };
}