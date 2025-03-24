import Breadcrumb from "@/components/shared/BreadCrumb"
import PostList from "./post-list"
import MainCategories from "./main-categories"

const BlogsByCategory = ({ slug }) => {
    return (
        <div className="max-w-6xl mx-auto mxmt-4 flex flex-col gap-4">
            <Breadcrumb />
            {/* <Introduction /> */}
            <MainCategories />
            {/* <FeaturedPosts /> */}
            <PostList slug={slug} />
        </div>
    )
}

export default BlogsByCategory
