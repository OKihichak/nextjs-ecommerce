import { Comment } from "../interface";

interface Props {
  comments: Array<Comment>;
}

const AllComments = ({ comments }: Props) => {
  return (
    <div className="mt-10 bg-white shadow-sm rounded-lg p-3">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">All Comments</h3>
      {comments?.length === 0 ? (
        <p className="text-gray-500 text-center">No comments yet. Be the first to leave a comment!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment?._id} className="border-b border-gray-200 pb-4 last:border-none">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">
                  {comment?.name}
                </p>
                <span className="text-gray-400 text-xs">
                  {new Date(comment?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{comment?.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllComments;
