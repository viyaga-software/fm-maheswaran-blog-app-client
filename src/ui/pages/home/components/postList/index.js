import { getAllBlogs } from "@/lib/actions/blog";
import PostListItem from "./PostListItem"

const PostList = async () => {

    const page = 1
    const pageLimit = 10

    const fields = "title,subtitle,slug,excerpt,featured_image,views,comments_count,createdAt,blog_status";

    const filters = [
        { field: "blog_status", operator: "$eq", value: "published" }
    ];

    const sort = ""

    const pagination = { page, pageSize: pageLimit };

    const blogs = await getAllBlogs({ fields, filters, pagination, sort, revalidate: 60 * 60 * 24 * 365, tags: ["blogs"] });

    console.log({ blogs });

    if (blogs?.error) return <ServerError message="An error occurred. Please try again later." />

    const posts = [
        {
            img: "/images/blog.webp", slug: "chess-blog", category: "beginers",
            title: "Mastering the 64 Squares: Strategies to Elevate Your Chess Game", createdAt: "08/12/2024", user: { username: "Maheswaran" },
            desc: "Discover expert tips, proven strategies, and tactical insights to improve your chess skills. Whether you're a beginner or an experienced player, this blog will guide you in mastering openings, controlling the board, and achieving checkmate with confidence",
        },
        {
            img: "/images/blog.webp", slug: "chess-blog", category: "beginers",
            title: "Mastering the 64 Squares: Strategies to Elevate Your Chess Game", createdAt: "08/12/2024", user: { username: "Maheswaran" },
            desc: "Discover expert tips, proven strategies, and tactical insights to improve your chess skills. Whether you're a beginner or an experienced player, this blog will guide you in mastering openings, controlling the board, and achieving checkmate with confidence",
        },
        {
            img: "/images/blog.webp", slug: "chess-blog", category: "beginers",
            title: "Mastering the 64 Squares: Strategies to Elevate Your Chess Game", createdAt: "08/12/2024", user: { username: "Maheswaran" },
            desc: "Discover expert tips, proven strategies, and tactical insights to improve your chess skills. Whether you're a beginner or an experienced player, this blog will guide you in mastering openings, controlling the board, and achieving checkmate with confidence",
        },
        {
            img: "/images/blog.webp", slug: "chess-blog", category: "beginers",
            title: "Mastering the 64 Squares: Strategies to Elevate Your Chess Game", createdAt: "08/12/2024", user: { username: "Maheswaran" },
            desc: "Discover expert tips, proven strategies, and tactical insights to improve your chess skills. Whether you're a beginner or an experienced player, this blog will guide you in mastering openings, controlling the board, and achieving checkmate with confidence",
        },
        {
            img: "/images/blog.webp", slug: "chess-blog", category: "beginers",
            title: "Mastering the 64 Squares: Strategies to Elevate Your Chess Game", createdAt: "08/12/2024", user: { username: "Maheswaran" },
            desc: "Discover expert tips, proven strategies, and tactical insights to improve your chess skills. Whether you're a beginner or an experienced player, this blog will guide you in mastering openings, controlling the board, and achieving checkmate with confidence",
        },
        {
            img: "/images/blog.webp", slug: "chess-blog", category: "beginers",
            title: "Mastering the 64 Squares: Strategies to Elevate Your Chess Game", createdAt: "08/12/2024", user: { username: "Maheswaran" },
            desc: "Discover expert tips, proven strategies, and tactical insights to improve your chess skills. Whether you're a beginner or an experienced player, this blog will guide you in mastering openings, controlling the board, and achieving checkmate with confidence",
        },
    ]

    return (
        <div className="">
            <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
            {blogs?.data?.map((post, index) => <PostListItem key={index} post={post} />)}
        </div>
    )
}

export default PostList
