import React from "react";

const Login = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Log in to GitShowcase</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
          <button className="w-full">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login