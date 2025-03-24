import Comment from "./Comment";

const Comments = ({ postId }) => {

  const handleSubmit = () => { }
  const [isPending, error] = [false, false]
  const data = [
    { user: { img: "/next.svg", username: "test_human", createdAt: "2/12/24" }, desc: "thankyou this blog is very usefull for my game" },
    { user: { img: "/next.svg", username: "test_human", createdAt: "2/12/24" }, desc: "thankyou this blog is very usefull for my game" },
    { user: { img: "/next.svg", username: "test_human", createdAt: "2/12/24" }, desc: "thankyou this blog is very usefull for my game" },
    { user: { img: "/next.svg", username: "test_human", createdAt: "2/12/24" }, desc: "thankyou this blog is very usefull for my game" },
    { user: { img: "/next.svg", username: "test_human", createdAt: "2/12/24" }, desc: "thankyou this blog is very usefull for my game" },
  ]

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
