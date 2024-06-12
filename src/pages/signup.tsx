import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            router.push('/contract-upload');
        } else {
            // Handle error
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
            {/* Navbar */}
            <nav className="bg-black text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <span className="text-lg font-semibold">Corpq AI</span>
                </div>
            </nav>

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] px-4 flex-grow">
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full mt-10 mb-10 md:mb-0">
                        <h1 className="text-4xl font-bold mb-8 text-center text-black">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="mb-8">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    style={{ color: '#333' }}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    style={{ color: '#333' }}
                                />
                            </div>
                            <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-50">
                                Sign Up
                            </button>
                        </form>
                        <div className="text-center">
                            <p className="text-gray-600 mb-4">Already have an account?</p>
                            <button onClick={() => router.push('/login')} className="text-blue-500 font-semibold">Login</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center w-full md:w-1/2">
                    <img src="/image.png" alt="Signup Image" className="w-full h-auto rounded-xl shadow-md" />
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white py-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center text-black">About Corpq AI</h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        Corpq AI is dedicated to simplifying contract analysis with the power of AI.
                        Our platform helps you identify risks, summarize contracts, and suggest the best legal advisors for your needs.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        At Corpq AI, we believe in making legal work more accessible, efficient, and secure.
                        By leveraging cutting-edge AI technologies, we provide you with actionable insights to navigate complex legal documents effortlessly.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        Join us in transforming how legal work is done with innovative technology and expert support.
                        Whether you are a business owner, legal professional, or individual, Corpq AI is your trusted partner for legal clarity and peace of mind.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        Contact us today to learn more about how Corpq AI can streamline your legal processes and empower your decision-making.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Corpq AI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Signup;