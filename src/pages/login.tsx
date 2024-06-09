import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router'; // Import the useRouter hook
import React from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newUsername, setNewUsername] = useState(''); // Add state for new username
    const [newPassword, setNewPassword] = useState(''); // Add state for new password
    const { user, login } = useAuth();
    const router = useRouter(); // Initialize the useRouter hook

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
        // Redirect to the contract uploading page after successful login
        router.push('/contract-upload');
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        // Implement your sign-up logic here
        // For example, you can call a separate sign-up function from your AuthContext
        // Redirect to the contract uploading page after successful sign up
        router.push('/contract-upload');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Login or Sign Up</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Login
                </button>
            </form>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Sign Up</h2>
                <form onSubmit={handleSignUp} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="new-username" className="block text-sm font-medium text-gray-700">New Username</label>
                        <input
                            type="text"
                            id="new-username"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1 block w-full"
                        />
                    </div>
                    <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
