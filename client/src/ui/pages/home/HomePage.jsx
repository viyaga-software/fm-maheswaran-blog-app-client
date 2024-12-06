import MainLayout from "@/ui/layouts/MainLayout"
import BreadCrumb from "@/ui/shared/BreadCrumb"
import Introduction from "./components/Introduction"
import MainCategories from "./components/MainCategories"
import FeaturedPosts from "./components/FeaturedPosts"

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mt-4 flex flex-col gap-4">
      <BreadCrumb prev={[{ name: "Home", path: "/" }]} currentPage="Blogs and Articles" />
      <Introduction />
      <MainCategories />
      <FeaturedPosts />
      </div>
    </MainLayout>
  )
}

export default HomePage
