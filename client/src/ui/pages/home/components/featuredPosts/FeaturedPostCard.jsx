import Image from "next/image"
import Link from "next/link"
import { format } from "timeago.js"

const FeaturedPostCard = ({ post }) => {
    return (
        <>
            {post && <div className="lg:h-1/3 flex justify-between gap-4">
                {post.img && <div className="w-1/3 aspect-video">
                    <Image
                        src={post.img}
                        className="rounded-3xl object-cover w-full h-full"
                        width="298"
                        height="250"
                        alt={"Image of" + post.title}
                    />
                </div>}
                {/* details and title */}
                <div className="w-2/3">
                    {/* details */}
                    <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                        <h1 className="font-semibold">02.</h1>
                        <Link href="/" alt="" className="text-blue-800">{post.category}</Link>
                        <span className="text-gray-500 text-sm">{format(post.createdAt)}</span>
                    </div>
                    {/* title */}
                    <Link
                        href={post.slug}
                        alt=""
                        className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
                    >
                        {post.title}
                    </Link>
                </div>
            </div>}
        </>
    )
}

export default FeaturedPostCard
