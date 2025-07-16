import { GithubIcon } from "lucide-react";

export default function GitHub() {
    return (
        <button
            type="button"
            className="flex cursor-pointer gap-4 justify-center font-bold w-full p-3 border border-neutral-700 bg-white hover:bg-neutral-200 text-black rounded"
        >
            <GithubIcon /> GitHub
        </button>
    );
}
