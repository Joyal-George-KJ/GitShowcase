"use client"

export default function Register() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-16">
            <div className="w-2/4 space-y-6 bg-neutral-800 p-8 rounded-xs">
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
                        <input
                            required
                            type="text"
                            placeholder="First Name*"
                            className="w-full pl-6 p-3 border border-neutral-500 bg-neutral-900 text-white rounded"
                        />
                        <input
                            required
                            type="text"
                            placeholder="Last Name*"
                            className="w-full pl-6 p-3 border border-neutral-500 bg-neutral-900 text-white rounded"
                        />
                    </div>
                    <input
                        required
                        type="github-username"
                        placeholder="GitHub UserName*"
                        className="w-full pl-6 p-3 border border-neutral-500 bg-neutral-900 text-white rounded"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email*"
                        className="w-full pl-6 p-3 border border-neutral-500 bg-neutral-900 text-white rounded"
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password*"
                        className="w-full pl-6 p-3 border border-neutral-500 bg-neutral-900 text-white rounded"
                    />
                    <div>
                        <input
                            required
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                            className="caret-neutral-500"
                        />{"  "}
                        <label htmlFor="terms-and-conditions">
                            I agree to <a href="" className="underline text-white">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="w-full pl-6 p-3 border border-neutral-700 bg-blue-600 hover:bg-blue-800 text-white rounded">
                        Create account
                    </button>
                </form>
            </div>
        </main>
    );
}
