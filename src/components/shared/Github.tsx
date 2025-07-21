'use client';

import Image from 'next/image';

export default function GitHub() {
    return (
        <button
            type="button"
            aria-label="github auth"
            className="flex items-center gap-2 w-full justify-center shadow shadow-gray-300 rounded-lg py-2 px-4 cursor-pointer  hover:-translate-y-1 transition"
        >
            <Image
                src={'/github-mark-white.svg'}
                alt="google logo"
                width={16}
                height={16}
            />{' '}
            GitHub
        </button>
    );
}
