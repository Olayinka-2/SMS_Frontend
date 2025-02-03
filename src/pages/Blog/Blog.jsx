import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();

    const blogs = [
        { id: 1, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 2, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 3, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 4, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 5, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 6, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 7, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 8, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
        { id: 9, title: "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom", author: "Ndaloke", date: "Fri, Mar 8, 2024, 7:00 AM ", description: "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.", content: "Full content of Blog 1...", image: "/blogImage.png" },
    ];

    // Show only 4 blogs initially
    const [visibleBlogs, setVisibleBlogs] = useState(10);

    // Load more blogs when clicking the button
    const handleLoadMore = () => {
        setVisibleBlogs(blogs.length); // Show all blogs
    };

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-[#001B07] text-white flex items-center">
                <img
                    src="/blogheroimage.png"
                    alt="Blog Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative text-justify p-8">
                    <h1 className="text-4xl font-bold">Our Blog</h1>
                    <p className="mt-2 text-lg">
                        Welcome to the WiSchool Blog! Explore our collection of articles, insights, and resources.
                    </p>
                </div>
            </section>

            {/* Blog List */}
            <section className="p-6 flex flex-col gap-6">
                {blogs.slice(0, visibleBlogs).map((blog, index) => (
                    <React.Fragment key={blog.id}>
                        <div
                            className="bg-white p-4 shadow-md cursor-pointer hover:shadow-lg transition"
                            onClick={() => navigate(`/blog/${blog.id}`, { state: blog })}
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                            <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
                            <p className="text-gray-600 text-sm">By {blog.author} | {blog.date}</p>
                            <p className="mt-2 text-gray-700">{blog.description}</p>
                        </div>

                        {/* Show Subscribe Section After First 4 Blogs */}
                        {index === 3 && visibleBlogs > 4 && (
                            <section className="p-6 bg-white text-center shadow-md">
                                <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
                                <p className="mt-2 text-gray-700">Get the latest updates directly to your inbox.</p>
                                <div className="mt-4 flex justify-center">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="p-3 border rounded-l w-64"
                                    />
                                    <button className="bg-blue-600 text-white p-3 rounded-r">Subscribe</button>
                                </div>
                            </section>
                        )}
                    </React.Fragment>
                ))}
            </section>

            {/* Load More Blogs */}
            {visibleBlogs < blogs.length && (
                <div className="flex justify-center my-6">
                    <button
                        onClick={handleLoadMore}
                        className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
                    >
                        See More Updates
                    </button>
                </div>
            )}
        </div>
    );
};

export default Blog;
