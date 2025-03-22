import { revalidateTag } from 'next/cache';
import qs from 'qs';
import { getCartQuery } from './quries/cart';
import { getCollectionProductsQuery } from './quries/collection';
import { getFooterMenuQuery, getHeaderMenuQuery } from './quries/menu';
import { getProductQuery, getRelatedProductsQuery } from './quries/product';
import { Menu } from './types';

const endpoint = process.env.STRAPI_API_ENDPOINT;
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
};

export async function strapiFetch({ path, query, method = 'GET', body, tags, revalidateTime = 18000 }) {

    try {
        const url = `${endpoint}${path}${query ? `?${qs.stringify(query, { encodeValuesOnly: true })}` : ''}`; console.log({ url, query });
        const result = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            ...(tags && { next: { tags, revalidate: revalidateTime } })
        });

        const responseBody = await result.json();

        if (!result.ok) {
            throw responseBody;
        }

        return {
            status: result.status,
            body: responseBody
        };
    } catch (e) {
        throw {
            error: e,
            path
        };
    }
}


export async function getAllBlogs({ pagination }) {
    const res = await strapiFetch({ path: '/blogs', tags: ['blogs'] });
    return res.body.data;
}