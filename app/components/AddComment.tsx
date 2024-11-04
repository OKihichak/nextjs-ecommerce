"use client";

import { useForm } from "react-hook-form";

interface Props{
  dataId: string,
}

const AddComment = ({dataId}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data:any) => {
    const {name, comment} = data;

    const res = await fetch("/api/comment",{
      method:"POST",
      body: JSON.stringify({name,comment, dataId}),
    });

    if (!res.ok) {
      console.log("Fail to add")
      return;
    }

    reset();

  };

  return (
    <div className="mt-14">
      <h3 className="text-lg font-semibold mb-4">Leave a comment</h3>
      <form
        className="flex flex-col border border-gray-300 shadow-sm rounded-lg px-6 py-4 bg-gray-50"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          placeholder="Your name"
          className="border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mb-2">Name is required.</p>
        )}

        <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="comment">
          Comment
        </label>
        <textarea
          {...register("comment", { required: true, minLength: 2 })}
          placeholder="Write your comment here..."
          className="border border-gray-300 rounded-md p-2 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
        />
        {errors.comment && (
          <p className="text-red-600 text-sm mb-2">Comment is required, minimum length is 2.</p>
        )}

        <button
          type="submit"
          disabled = {isSubmitting}
          
          className={'bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition ${isSubmitting ? "opacity-50" : ""}'}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;
