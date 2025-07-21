'use client';

import GitHub from '@/components/shared/Github';
import Google from '@/components/shared/Google';
import Input from '@/components/shared/Input';

export default function Login() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-neutral-900">
            <div className="w-full max-w-md space-y-6 bg-neutral-800 p-10 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-white">Login to GitShowcase</h2>
                <p className="text-sm text-neutral-400">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-400 hover:underline">
                        Sign Up
                    </a>
                </p>
                <form className="space-y-4 gap-4">
                    <Input type="email" placeholder="Email*" required />
                    <Input type="password" placeholder="Password*" required />
                    <div className="flex gap-4 flex-col">
                        <button
                            type="submit"
                            className="w-full p-3 border border-neutral-700 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                        >
                            Login
                        </button>
                        <div className="flex relative justify-center items-center my-4 border border-neutral-300">
                            <span className="px-2 block text-center absolute bg-neutral-800 cursor-default select-none">
                                OR
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Google />
                            <GitHub />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
