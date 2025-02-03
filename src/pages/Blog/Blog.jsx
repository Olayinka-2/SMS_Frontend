import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();

    const blogs = [
        { id: 1, title: "How to Improve Learning", author: "John Doe", date: "Jan 10, 2025", description: "Brief description of the blog...", content: "Full content of Blog 1...", image: "/blog-image1.jpg" },
        { id: 2, title: "Top 5 Study Tips", author: "Jane Smith", date: "Jan 12, 2025", description: "Brief description of the blog...", content: "Full content of Blog 2...", image: "/blog-image2.jpg" },
        { id: 3, title: "Why Education Matters", author: "Michael Brown", date: "Jan 15, 2025", description: "Brief description of the blog...", content: "Full content of Blog 3...", image: "/blog-image3.jpg" },
        { id: 4, title: "Best Online Learning Platforms", author: "Emily White", date: "Jan 18, 2025", description: "Brief description of the blog...", content: "Full content of Blog 4...", image: "/blog-image4.jpg" },
        { id: 5, title: "Time Management for Students", author: "James Wilson", date: "Jan 20, 2025", description: "Brief description of the blog...", content: "Full content of Blog 5...", image: "/blog-image5.jpg" },
        { id: 6, title: "How to Stay Motivated", author: "Sarah Lee", date: "Jan 22, 2025", description: "Brief description of the blog...", content: "Full content of Blog 6...", image: "/blog-image6.jpg" },
        { id: 7, title: "Effective Note-Taking Strategies", author: "David Clark", date: "Jan 24, 2025", description: "Brief description of the blog...", content: "Full content of Blog 7...", image: "/blog-image7.jpg" },
        { id: 8, title: "Best Books for Self-Improvement", author: "Emma Adams", date: "Jan 26, 2025", description: "Brief description of the blog...", content: "Full content of Blog 8...", image: "/blog-image8.jpg" },
        { id: 9, title: "How to Prepare for Exams", author: "Olivia Martinez", date: "Jan 28, 2025", description: "Brief description of the blog...", content: "Full content of Blog 9...", image: "/blog-image9.jpg" },
    ];

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
                {blogs.map((blog, index) => (
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

                        {/* Add Subscribe Section After 4 Blogs */}
                        {index === 3 && (
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
            <div className="flex justify-center my-6">
                <button className="bg-gray-800 text-white px-6 py-3 rounded">See More Updates</button>
            </div>
        </div>
    );
};

export default Blog;
