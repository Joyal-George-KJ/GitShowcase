import React from "react";
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <main className="flex flex-col items-center justify-center px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-4 animate-lr">
                    Showcase Your GitHub Projects with Style
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mb-6 animate-tb">
                    GitShowcase is your space to highlight what you've built,
                    share your journey, and stand out in the developer
                    community.
                </p>
                <div className="grid grid-cols-2 mx-auto gap-4">
                    <Link href="/api/auth/google">
                        <button
                            type="button"
                            aria-label="Getting Started Button"
                            className="animate-lr w-full text-lg px-6 py-3 border-1 rounded-xl bg-white text-black border-gray-400 transition-all hover:-translate-y-0.5 font-semibold"
                        >
                            View
                        </button>
                    </Link>
                    <Link href="/register">
                        <button
                            type="button"
                            aria-label="Getting Started Button"
                            className="animate-rl delay-200 w-full text-lg px-6 py-3 border-1 rounded-xl transition-all hover:-translate-y-0.5 font-semibold"
                        >
                            Register
                        </button>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default HomePage;
