import { useAuth0 } from '@auth0/auth0-react';
import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../Services/authService';
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const { user, isAuthenticated, isLoading } = useAuth0();

    const token = Cookies.get('accessToken') || localStorage.getItem('accessToken');
    useEffect(() => {
        if (token) {
            (async () => {
                    const response = await authService.getUserProfile();
                    setUserData(response?.user);
            }
            )();
        }
        else if(!isLoading && isAuthenticated && user) {
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
            googleLogin(user);
        }
    }, [isLoading, isAuthenticated, user, token]);

    return (

        <AuthContext.Provider value={{ userData }}>
            {children}
        </AuthContext.Provider>

    );
};
