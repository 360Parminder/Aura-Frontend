import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const { authService } = require('../Services/authService.js'); // hypothetical service

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); // Correctly use the hook inside the component

    useEffect(() => {
        // Check for user authentication status on component mount
        const token = localStorage.getItem('accessToken');
        if (token) {
            authService.getUserProfile(token).then((userData) => {
                setUser(userData);
                setIsAuthenticated(true);
                console.log("useeffect true");
            }).catch((error) => {
                console.error("Failed to fetch user profile:", error);
                setIsAuthenticated(false);
                localStorage.removeItem('accessToken');
                navigate('/');
                console.log("useeffect false");
                
            });
        }
    }, []); // Include 'navigate' in the dependency array

    const login = async (credentials) => {
        const response = await authService.login(credentials);
        if (response.status === 200) {
            setUser(response.user);
            setIsAuthenticated(true);
            localStorage.setItem('accessToken', response.data.accessToken);
        }
        return response;
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('accessToken'); // Use the correct token key
        navigate('/'); // Redirect after logout
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
