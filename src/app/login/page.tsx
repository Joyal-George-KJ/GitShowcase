"use client";

import GitHub from "@/components/shared/Github";
import Google from "@/components/shared/Google";
import Input from "@/components/shared/Input";

export default function Login() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-2/6 space-y-6 bg-neutral-800 p-8 rounded-xs">
                <h2 className="text-4xl mb-2 font-bold text-start">
                    Login to GitShowcase
                </h2>
                <p className="text-base font-extralight text-neutral-300 text-start">
                    Don't have an account?{" "}
                    <a href="/register" className="text-white underline">
                        Sign Up
                    </a>
                </p>
                <form className="space-y-4">
                    {[
                        {
                            type: "email",
                            placeholder: "Email*",
                            required: true,
                        },
                        {
                            type: "password",
                            placeholder: "Password*",
                            required: true,
                        },
                    ].map((val, ind) => (
                        <Input
                            key={ind}
                            type={val.type}
                            placeholder={val.placeholder}
                            required={val.required}
                        />
                    ))}
                    <button
                        type="submit"
                        className="w-full cursor-pointer mt-2 p-3 border border-neutral-700 bg-blue-600 hover:bg-blue-800 text-white rounded"
                    >
                        Login
                    </button>
                    <div className="flex relative justify-center items-center my-4 border border-neutral-300">
                        <span className="px-2 block text-center absolute bg-neutral-800 cursor-default select-none">
                            OR
                        </span>
                    </div>
                    <div className="grid grid-cols-2 mt-8 gap-4">
                        <Google />
                        <GitHub />
                    </div>
                </form>
            </div>
        </main>
    );
}
