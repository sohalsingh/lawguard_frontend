import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface AuthContextType {
    user: string | null;
    login: (username: string, password: string) => Promise<void>;
    signup: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Redirect to login page if user is not authenticated and not on the login or signup page
        const unprotectedRoutes = ['/login', '/signup'];
        if (!user && !unprotectedRoutes.includes(router.pathname)) {
            router.push('/login');
        }
    }, [user, router]);

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post('/api/login', { username, password });
            setUser(response.data.user);
            router.push('/');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error (e.g., display error message)
        }
    };

    const signup = async (username: string, password: string) => {
        try {
            const response = await axios.post('/api/signup', { username, password });
            setUser(response.data.user);
            router.push('/');
        } catch (error) {
            console.error('Signup failed:', error);
            // Handle error (e.g., display error message)
        }
    };

    const logout = () => {
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
