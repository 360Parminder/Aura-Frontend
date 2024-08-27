import React, { createContext, useState, useEffect } from 'react';
const {authService} = require('../Services/authService.js'); // hypothetical service

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for user authentication status on component mount
        const token = localStorage.getItem('accessToken');
        if (token) {
            authService.getUserProfile(token).then((userData) => {
                setUser(userData);
                setIsAuthenticated(true);
            }).catch(() => {
                setIsAuthenticated(false);
                localStorage.removeItem('accessToken');
            });
        }
    }, []);
    // console.log(user);

    const login = async (credentials) => {
        const response = await authService.login(credentials);
        if (response.status=='200') {
            setUser(response.user);
            setIsAuthenticated(true);
            localStorage.setItem('accessToken', response.data.accessToken);
        }
        return response;
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
