export const getAllBlogsQuery = async() => {
    return {
        fields:"title,subtitle,slug,excerpt,featured_image,views,comments_count,createdAt,blog_status",
        
    }
}