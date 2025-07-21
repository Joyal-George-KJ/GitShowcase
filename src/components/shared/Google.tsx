'use client';

import Image from 'next/image';

export default function Google() {
    return (
        <button
            type="button"
            aria-label="google auth"
            className="flex items-center gap-2 w-full justify-center shadow shadow-gray-300 rounded-lg py-2 px-4 text-gray-800 bg-white cursor-pointer hover:-translate-y-1 transition"
        >
            <Image
                src={'/google.svg'}
                alt="google logo"
                width={16}
                height={16}
            />
            Google
        </button>
    );
}
