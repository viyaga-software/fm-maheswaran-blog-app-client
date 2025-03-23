import MainLayout from "@/ui/layouts/MainLayout"
import BreadCrumb from "@/ui/shared/BreadCrumb"
import Introduction from "./components/Introduction"
import MainCategories from "./components/mainCategories"
import FeaturedPosts from "./components/featuredPosts"
import PostList from "./components/postList"

const HomePage = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto mxmt-4 flex flex-col gap-4">
        <BreadCrumb />
        <Introduction />
        <MainCategories />
        <FeaturedPosts />
        <PostList />
      </div>
    </MainLayout>
  )
}

export default HomePage
