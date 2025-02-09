import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import AdmissionHeader from "../../components/AdmissionHeader/header";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state; // Get the blog data passed via navigate()

  if (!blog) {
    return (
      <div className="text-center text-xl mt-10">
        Blog not found.{" "}
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <>
      <AdmissionHeader page="Blog" title="Read" />
      <div className="p-12">
        <h2 className="text-[#232A31] w-[80%] text-[38px] font-bold">
          {blog.title}
        </h2>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
        <p className="text-gray-600 text-sm">
          By {blog.author} | {blog.date}
        </p>
        <p className="mt-4 text-gray-700">{blog.content}</p>
        <button
          className="mt-6 bg-gray-800 text-white px-6 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Back to Blogs
        </button>
      </div>
    </>
  );
};

export default BlogDetail;
