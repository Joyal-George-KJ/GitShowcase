import React from "react";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";

const HomePage = () => {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-4">
                    Showcase Your GitHub Projects with Style
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mb-6">
                    GitShowcase is your space to highlight what you've built,
                    share your journey, and stand out in the developer
                    community.
                </p>
                <div className="grid grid-cols-2 mx-auto gap-4">
                    <Link href="/dashboard">
                        <button
                            type="button"
                            aria-label="Getting Started Button"
                            className="animate-into-frame-lr w-full text-lg px-6 py-3 border-1 rounded-xl bg-white text-black border-gray-400 transition-all hover:-translate-y-0.5 font-semibold"
                        >
                            View
                        </button>
                    </Link>
                    <Link href="/register">
                        <button
                            type="button"
                            aria-label="Getting Started Button"
                            className="animate-into-frame-rl delay-200 w-full text-lg px-6 py-3 border-1 rounded-xl transition-all hover:-translate-y-0.5 font-semibold"
                        >
                            Register
                        </button>
                    </Link>
                </div>
                <footer className="mt-16 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Inspired by the original
                        <strong className="mx-1">GitShowcase</strong> created by
                        Victor & Pedro in 2017
                    </div>
                    <p className="mt-2">
                        We honor their mission to give developers the spotlight
                        they deserve. This project is a tribute to their vision
                        and the community they empowered.
                    </p>
                </footer>
            </main>
        </>
    );
};

export default HomePage;
