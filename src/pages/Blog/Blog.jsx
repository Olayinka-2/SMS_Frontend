import React from "react";

const Blog = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-[#001B07] text-white flex items-center ">
                <img
                    src="/blogheroimage.png"
                    alt="Blog Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative text-justify p-8">
                    <h1 className="text-4xl font-bold">Our Blog</h1>
                    <p className="mt-2 text-lg">Welcome to the WiSchool Blog! Explore our collection of articles, insights, and resources on education, student success, parenting tips, and more. Whether you're a student, parent, educator, or member of the community, you'll find valuable information and inspiration to support your journey in education.</p>
                </div>
            </section>

            {/* Blog List */}
            <section className="p-6 flex flex-col gap-6">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="bg-white p-4 shadow-md">
                        <img src="blog-image.jpg" alt="Blog" className="w-full h-40 object-cover" />
                        <h3 className="text-xl font-semibold mt-4">Blog Title {index + 1}</h3>
                        <p className="text-gray-600 text-sm">By Author | Date & Time</p>
                        <p className="mt-2 text-gray-700">Brief description of the blog...</p>
                    </div>
                ))}
            </section>

            {/* Subscribe to Newsletter */}
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

            {/* Load More Blogs */}
            <div className="flex justify-center my-6">
                <button className="bg-gray-800 text-white px-6 py-3 rounded">See More Updates</button>
            </div>
        </div>
    );
};

export default Blog;
