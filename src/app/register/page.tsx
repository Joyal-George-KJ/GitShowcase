"use client";

import GitHub from "@/components/shared/Github";
import Google from "@/components/shared/Google";
import Input from "@/components/shared/Input";

export default function Register() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="w-2/6 space-y-6 bg-neutral-800 p-8 rounded-xs">
                <h2 className="text-4xl mb-2 font-bold text-start">
                    Create an account
                </h2>
                <p className="text-base font-extralight text-neutral-300 text-start">
                    Already have an account?{" "}
                    <a href="/login" className="text-white underline">
                        Log in
                    </a>
                </p>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                type: "text",
                                placeholder: "First Name*",
                                required: true,
                            },
                            {
                                type: "text",
                                placeholder: "Last Name*",
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
                    </div>
                    {[
                        {
                            type: "text",
                            placeholder: "GitHub username*:",
                            required: true,
                        },
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
                    <div>
                        <label htmlFor="terms-and-conditions">
                            <span className="text-red-500">*</span>by creating account you are agree to{" "}
                            <a href="" className="underline text-white">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer mt-2 p-3 border border-neutral-700 bg-blue-600 hover:bg-blue-800 text-white rounded"
                    >
                        Create account
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
