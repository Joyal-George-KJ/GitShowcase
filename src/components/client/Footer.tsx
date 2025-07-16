"use client";

import { Star } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathName = usePathname();

    if (["/login", "/register"].includes(pathName)) return;

    return (
        <footer className="my-16 absolute bottom-0 left-0 right-0 text-sm text-muted-foreground animate-bt">
            <div className="flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                Inspired by the original
                <strong className="mx-1 underline">
                    <a href="https://www.gitshowcase.com/">GitShowcase</a>
                </strong>{" "}
                created by Victor & Pedro in 2017
            </div>
            <p className="mt-2 text-center">
                We honor their mission to give developers the spotlight they
                deserve. This project is a tribute to their vision and the
                community they empowered.
            </p>
        </footer>
    );
}
