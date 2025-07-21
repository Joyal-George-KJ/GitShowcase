export default function Landing() {
    return (
        <>
            <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
                <h1 className="text-5xl font-bold mb-4 animate-lr">Welcome to GitShowcase</h1>
                <p className="max-w-xl text-lg animate-rl">
                    Showcase your GitHub projects beautifully. Gain visibility, attract
                    opportunities, and build your developer brand effortlessly.
                </p>
            </main>
            <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6">
                <h2 className="text-4xl font-bold mb-10">Why Developers Love GitShowcase</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                    <div className="animate-tb bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">🛠️ Portfolio in Minutes</h3>
                        <p>
                            No more manual work. Auto-generate your profile directly from your
                            GitHub projects.
                        </p>
                    </div>
                    <div className="animate-tb bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">🌐 Get Discovered</h3>
                        <p>
                            Your work deserves attention. Boost your visibility to recruiters and
                            collaborators.
                        </p>
                    </div>
                    <div className="animate-tb bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">📈 Track Your Impact</h3>
                        <p>
                            See how many views your projects get and understand what's attracting
                            attention.
                        </p>
                    </div>
                </div>
            </section>
            <section className="h-screen flex flex-col justify-center items-center bg-indigo-700 text-white text-center px-6">
                <h2 className="text-4xl font-bold mb-6">Start Building Your Developer Presence</h2>
                <p className="max-w-xl mb-8">
                    Join thousands of developers showcasing their best work with GitShowcase.
                </p>
                <a
                    href="/register"
                    className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
                >
                    Create Your Free Profile
                </a>
            </section>
        </>
    );
}
