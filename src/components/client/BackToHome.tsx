import Link from 'next/link';

export default function BackToHome() {
    return (
        <Link
            href="/"
            className="cursor-pointer border-b border-blue-500 w-fit pb-2 mb-2"
        >
            Back to Home
        </Link>
    );
}
