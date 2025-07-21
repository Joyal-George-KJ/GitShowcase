'use client';

import BackToHome from '@/components/client/BackToHome';
import GitHub from '@/components/shared/Github';
import Google from '@/components/shared/Google';
import Input from '@/components/shared/Input';

export default function Register() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-neutral-900">
            <div className="w-full max-w-md flex flex-col space-y-6 bg-neutral-800 p-10 rounded-lg shadow-md">
                <BackToHome />
                <h2 className="text-3xl font-semibold text-white">
                    Create your GitShowcase account
                </h2>
                <p className="text-sm text-neutral-400">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-400 hover:underline">
                        Log in
                    </a>
                </p>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            key={1}
                            type="text"
                            placeholder="First Name*"
                            required
                        />
                        <Input
                            key={2}
                            type="text"
                            placeholder="Last Name*"
                            required
                        />
                    </div>
                    <Input
                        key={3}
                        type="text"
                        placeholder="GitHub Username*"
                        required
                    />
                    <Input key={4} type="email" placeholder="Email*" required />
                    <Input
                        key={5}
                        type="password"
                        placeholder="Password*"
                        required
                    />

                    <label className="block text-xs text-neutral-400">
                        <span className="text-red-500">*</span> By creating an
                        account, you agree to{' '}
                        <a href="#" className="underline text-white">
                            Terms & Conditions
                        </a>
                        .
                    </label>

                    <button
                        type="submit"
                        className="w-full mt-2 p-3 border cursor-pointer hover:-translate-y-1 border-neutral-700 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                    >
                        Create Account
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
