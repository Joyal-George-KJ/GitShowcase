"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A clean and responsive portfolio template built with Next.js.",
        tags: ["Next.js", "TailwindCSS", "Portfolio"],
        codeUrl: "#",
        previewUrl: "#",
        likes: 123,
        date: "2024-05-01",
        user: { name: "John Doe", profileUrl: "#", avatar: "/vercel.svg" },
        image: "/vercel.svg",
    },
    {
        id: 2,
        title: "E-Commerce Store",
        description: "Modern e-commerce solution with Stripe integration.",
        tags: ["React", "Stripe", "Commerce"],
        codeUrl: "#",
        previewUrl: "#",
        likes: 87,
        date: "2024-04-12",
        user: { name: "Jane Smith", profileUrl: "#", avatar: "/vercel.svg" },
        image: "/vercel.svg",
    },
    {
        id: 3,
        title: "Blog Platform",
        description: "A customizable blog platform with markdown support.",
        tags: ["Node.js", "Express", "MongoDB"],
        codeUrl: "#",
        previewUrl: "#",
        likes: 45,
        date: "2024-03-22",
        user: { name: "Alice Brown", profileUrl: "#", avatar: "/vercel.svg" },
        image: "/vercel.svg",
    },
    {
        id: 4,
        title: "Design System",
        description: "Reusable components for building accessible UIs faster.",
        tags: ["React", "Design Systems", "Accessibility"],
        codeUrl: "#",
        previewUrl: "#",
        likes: 210,
        date: "2024-02-15",
        user: { name: "Michael Green", profileUrl: "#", avatar: "/vercel.svg" },
        image: "/vercel.svg",
    },
];


const Project = () => {
    const [showForm, setShowForm] = useState(false);
    const [filter, setFilter] = useState("new");
    const isLoggedIn = true; // Replace with auth check.

    const handleToggleForm = () => setShowForm(!showForm);

    return (
        <div className="p-8 space-y-8 max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search Projects..."
                    className="w-full p-3 rounded bg-neutral-800 text-white outline-none border border-neutral-600"
                />
                <select
                    className="p-3 bg-neutral-800 text-white rounded border border-neutral-600"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="new">New</option>
                    <option value="popular">Popular</option>
                    <option value="following">Following</option>
                </select>
            </div>

            {isLoggedIn && (
                <div className="flex justify-end">
                    <button
                        onClick={handleToggleForm}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                    >
                        {showForm ? "Cancel" : "Add Project"}
                    </button>
                </div>
            )}

            {showForm && (
                <form className="bg-neutral-800 p-6 rounded space-y-4">
                    <input
                        className="w-full p-3 rounded bg-neutral-900 text-white border border-neutral-600"
                        placeholder="Project Title"
                        required
                    />
                    <textarea
                        className="w-full p-3 rounded bg-neutral-900 text-white border border-neutral-600"
                        placeholder="Short Description"
                        required
                    />
                    <input
                        className="w-full p-3 rounded bg-neutral-900 text-white border border-neutral-600"
                        placeholder="Tags (comma separated)"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                    >
                        Submit Project
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-neutral-800 rounded-lg shadow overflow-hidden">
                        <Image
                            src={"http://localhost:3000" +project.image}
                            alt={project.title}
                            width={16}
                            height={16}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="text-neutral-400 text-sm">{project.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs bg-neutral-700 px-2 py-1 rounded text-white">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-2">
                                <a href={project.codeUrl} className="text-blue-400 hover:underline">View Code</a>
                                <a href={project.previewUrl} className="text-blue-400 hover:underline">Preview</a>
                            </div>
                            <div className="flex items-center justify-between text-sm text-neutral-400 mt-4">
                                <span>{project.date}</span>
                                <button className="text-blue-400 hover:underline">❤️ {project.likes}</button>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={project.user.avatar}
                                        alt={project.user.name}
                                        width={24}
                                        height={24}
                                        className="rounded-full"
                                    />
                                    <a href={project.user.profileUrl} className="text-white text-sm hover:underline">
                                        {project.user.name}
                                    </a>
                                </div>
                                <button className="text-xs text-blue-400 border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-black">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
