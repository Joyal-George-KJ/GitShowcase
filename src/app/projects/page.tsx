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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, ind) => <ProjectCard key={ind} project={project} />)}
            </div>
        </div>
    );
};

export default Project;
