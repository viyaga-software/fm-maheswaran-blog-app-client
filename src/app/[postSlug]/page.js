import { getBlogBySlug } from "@/lib/strapi"
import SinglePostPage from "@/ui/pages/singlePost"

const page = async ({ params }) => {
  const { postSlug } = await params
  const post = await getBlogBySlug(postSlug)
  if (!post || post.error) {
    return <p>Post not found</p>
  }

  return (
    <SinglePostPage data={post.data} />
  )
}

export default page
