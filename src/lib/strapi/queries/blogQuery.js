export const getFeaturedBlogsQuery = () => {
    return {
        fields: [
            "title", "slug", "excerpt", "featured_image", "createdAt"
        ],
        filters: {
            is_featured: { $eq: true },
            blog_status: { $eq: "published" }
        },
        pagination: { page: 1, pageSize: 4 },
        sort: ["updatedAt:desc"]
    }
}

export const getRecentBlogsQuery = ({ page, pageSize, sort = ["createdAt:desc"], q, categories }) => {
    return {
        fields: [
            "title", "slug", "excerpt", "featured_image", "createdAt"
        ],
        filters: {
            ...(q ? { title: { $contains: q } } : {}),
            ...(categories ? { categories: { $contains: categories } } : {}),
            blog_status: { $eq: "published" }
        },
        pagination: { page, pageSize },
        ...(sort ? { sort: Array.isArray(sort) ? sort : [sort] } : {})
    }
}

export const getBlogBySlugQuery = (slug) => {
    return {
        fields: [
            "title", "subtitle", "slug", "excerpt", "featured_image",
            "createdAt", "free_content","content", "seo_meta_title",
            "seo_meta_description"
        ],
        populate: {
            author: { fields: ["username", "email"] },
            categories: { fields: ["name"] },
            comments: { fields: ["content", "createdAt"], populate: { user: { fields: ["username"] } } }
        },
        filters: {
            slug: { $eq: slug },
            blog_status: { $eq: "published" }
        }
    };
};

export const getAllBlogSlugsQuery = () => {
    return {
        fields: ["slug"],
        sort: ["createdAt:desc"]
    };
};
