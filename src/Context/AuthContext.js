import {  useAuth0 } from '@auth0/auth0-react';
import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../Services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const { user, isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
        const googleLogin = async (user) => {
            try {
                const response = await authService.googleLogin(user);
                if (response.success) {
                    const profileData = await authService.getUserProfile();
                    setUserData(profileData?.user);
                }
            } catch (error) {
                console.error("Error during Google login:", error);
            }
        };

        if (!isLoading && isAuthenticated && user) {
            googleLogin(user);
        }
    }, [isLoading, isAuthenticated, user]);

    return (
       
            <AuthContext.Provider value={{ userData }}>
                {children}
            </AuthContext.Provider>
       
    );
};
