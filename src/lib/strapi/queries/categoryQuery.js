export const getCategoriesQuery = ({ page, pageSize, sort = ["name:asc"] }) => {
    return {
        fields: [
            "name", "slug", "description", "image"
        ],
        pagination: { page, pageSize },
        ...(sort ? { sort: Array.isArray(sort) ? sort : [sort] } : {})
    };
};

export const getCategoryBySlugQuery = (slug) => {
    return {
        fields: [
            "name", "slug", "description", "image"
        ],
        populate: {
            parent_category: { fields: ["name", "slug"] },
            blogs: {
                fields: [
                    "title", "slug", "excerpt", "featured_image", "createdAt"
                ]
            }
        },
        filters: {
            slug: { $eq: slug }
        }
    };
};

export const getAllCategoryAndSlugQuery = () => {
    return {
        fields: ["name", "slug"],
        sort: ["name:asc"]
    };
};

export const searchCategoryQuery = (q) => {
    return {
        fields: ["name", "slug"],
        filters: {
            name: { $contains: q }
        }
    };
};
