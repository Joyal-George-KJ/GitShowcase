import Image from 'next/image';
import { useState } from 'react';

export default function GitHub() {
    const [hover, setHover] = useState(false);
    return (
        <button
            type="button"
            aria-label="github auth"
            className="flex items-center gap-2 w-full justify-center shadow shadow-gray-300 rounded-lg py-2 px-4 hover:text-black hover:bg-gray-300 transition"
            onMouseOver={() => setHover((prev) => true)}
            onMouseLeave={() => setHover((prev) => false)}
        >
            <Image
                src={hover ? '/github-mark.svg' : '/github-mark-white.svg'}
                alt="google logo"
                width={16}
                height={16}
            />{' '}
            GitHub
        </button>
    );
}
