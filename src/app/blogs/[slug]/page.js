import SinglePost from "@/components/pages/blogs/singlePost"
import { getBlogBySlug } from "@/lib/strapi"

const page = async ({ params }) => {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if(post.error) return <p>An Error Occurred</p>
  if(!post.data) return <p>Post Not Found</p>

  return (
    <SinglePost data={post.data} />
  )
}

export default page
