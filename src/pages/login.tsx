import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
        router.push('/contract-upload');
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to the sign-up page
        router.push('/signup');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-black text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <span className="text-lg font-semibold">Corpq AI</span>
                    {/* You can add additional navbar items here */}
                </div>
            </nav>

            <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] px-4">
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full mt-10 mb-10 md:mb-0"> {/* Added mb-10 for margin */}
                        <h1 className="text-4xl font-bold mb-8 text-center text-black">Login</h1>
                        <form onSubmit={handleSubmit} className="mb-8">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    style={{ color: '#333' }} // Change input text color
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
                                    style={{ color: '#333' }} // Change input text color
                                />
                            </div>
                            <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-50">
                                Login
                            </button>
                        </form>
                        <div className="text-center">
                            <p className="text-gray-600 mb-4">Do not have an account?</p>
                            <button onClick={handleSignUp} className="text-blue-500 font-semibold">Create an Account</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center w-full md:w-1/2">
                    <img src="/image.png" alt="Login Image" className="w-full h-auto rounded-xl shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default Login;
