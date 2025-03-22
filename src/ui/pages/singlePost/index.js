import MainLayout from "@/ui/layouts/MainLayout"
import SinglePost from "./components"

const SinglePostPage = ({ data }) => {
  return (
    <MainLayout>
        <SinglePost data={data} />
    </MainLayout>
  )
}

export default SinglePostPage
