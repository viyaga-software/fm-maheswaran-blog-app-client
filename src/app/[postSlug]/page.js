import { getBlogBySlug } from "@/lib/strapi"
import SinglePost from "@/ui/pages/singlePost/components"

const page = async ({ params }) => {
  const { postSlug } = await params
  const post = await getBlogBySlug(postSlug)

  if(post.error) return <p>An Error Occurred</p>
  if(!post.data) return <p>Post Not Found</p>
  return (
    <SinglePost data={post.data} />
  )
}

export default page
