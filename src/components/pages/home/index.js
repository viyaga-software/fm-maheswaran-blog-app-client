import BreadCrumb from "@/components/shared/BreadCrumb"
import Introduction from "./components/introduction"
import MainCategories from "./components/main-categories"
import FeaturedPosts from "./components/featuredPosts"
import PostList from "./components/postList"

const HomePage = () => {
  return (
      <div className="max-w-6xl mx-auto mxmt-4 flex flex-col gap-4">
        <BreadCrumb />
        <Introduction />
        <MainCategories />
        <FeaturedPosts />
        <PostList />
      </div>
  )
}

export default HomePage
