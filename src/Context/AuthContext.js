import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const { authService } = require('../Services/authService.js'); // hypothetical service

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); // Correctly use the hook inside the component
    const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
    const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;  
    // const REACT_APP_AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;
    const onRedirectCallback = (appState) => {
        console.log(appState);
        const token = appState?.target?.id_token;
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
    };
    useEffect(() => {
        // Check for user authentication status on component mount
        const token = localStorage.getItem('accessToken');
        if (token) {
            authService.getUserProfile(token).then((userData) => {
                setUser(userData);
                setIsAuthenticated(true);
                navigate('/homePage')
                // console.log("useEffect true");
            }).catch((error) => {
                console.error("Failed to fetch user profile:", error);
                setIsAuthenticated(false);
                localStorage.removeItem('accessToken');
                navigate('/');
                console.log("useEffect false");
                
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
        <Auth0Provider
            domain={AUTH0_DOMAIN}
            clientId={CLIENT_ID}
            redirectUri={window.location.origin}
            authorizationParams={{
                redirect_uri: window.location.origin
              }}
        >

        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
        </Auth0Provider>
    );
};
