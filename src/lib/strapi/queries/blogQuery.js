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

export const getRecentBlogsQuery = ({ page, pageSize, sort = ["createdAt:desc"], search, categories }) => {
    return {
        fields: [
            "title", "slug", "excerpt", "featured_image", "createdAt"
        ],
        filters: {
            ...(search ? { title: { $contains: search } } : {}),
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
            "title", "subtitle", "slug", "excerpt", "featured_image", "views",
            "comments_count", "createdAt", "blog_status", "content"
        ],
        populate: {
            author: { fields: ["username", "email"] },
            categories: { fields: ["name"] },
            tags: true,
            comments: { fields: ["content", "createdAt"], populate: { user: { fields: ["username"] } } }
        },
        filters: {
            slug: { $eq: slug }
        }
    };
};

export const getAllBlogSlugsQuery = () => {
    return {
        fields: ["slug"],
        sort: ["createdAt:desc"]
    };
};

export const getExistingBlogBySlugQuery = (slug) => {
    return {
        fields: ["slug"],
        filters: {
            slug: { $eq: slug }
        }
    };
};
