'use client';

export default function Input({
    type,
    placeholder,
    required = false,
}: Readonly<{ type: string; placeholder: string; required: boolean }>) {
    return (
        <input
            required={required}
            type={type}
            placeholder={placeholder}
            className="w-full p-3 border-b focus:border-b-4 border-neutral-500 text-white outline-none pl-0"
        />
    );
}
