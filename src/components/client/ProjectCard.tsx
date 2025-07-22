import { ProjectType } from "@/types/ProjectTypes";
import Image from "next/image";


export default function ProjectCard({project}: {project: ProjectType}) {
    return (
        <div key={project.id} className="bg-neutral-800 rounded-lg shadow overflow-hidden">
            <Image
                src={'http://localhost:3000' + project.image}
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
                        <span
                            key={idx}
                            className="text-xs bg-neutral-700 px-2 py-1 rounded text-white"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-2">
                    <a href={project.codeUrl} className="text-blue-400 hover:underline">
                        View Code
                    </a>
                    <a href={project.previewUrl} className="text-blue-400 hover:underline">
                        Preview
                    </a>
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
                        <a
                            href={project.user.profileUrl}
                            className="text-white text-sm hover:underline"
                        >
                            {project.user.name}
                        </a>
                    </div>
                    <button className="text-xs text-blue-400 border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-black">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}
