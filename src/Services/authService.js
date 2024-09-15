import axios from "axios";
import { navigate } from "ionicons/icons";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// console.log(API_BASE_URL);


// Utility function to handle HTTP errors
const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }
    return response.data;
};
export const authService = {
    login: async (credentials) => {
        // console.log(credentials);
        try {
            const response = await axios.post(`${API_BASE_URL}/loginUser`,
                { ...credentials }, {
                withCredentials: true
            });
            console.log(response);

            const data = await handleResponse(response);

            // Store the token in localStorage
            if (data) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                return { success: true, user: data.user, refreshToken: data.refreshToken, accessToken: data.accessToken };

            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    googleLogin: async (user) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/googleLogin`,
                {
                    ...user
                }, {
                withCredentials: true
            });
            if (response.data) {
                localStorage.setItem('accessToken', response.data.accessToken);
                return {data:response, success: true, message: "successfully" };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    signup: async (userData) => {
        // console.log(userData);
        try {
            const response = await axios.post(`${API_BASE_URL}/registerUser`,
                { ...userData });
            // console.log(response);

            const data = await handleResponse(response);
            if (data) {

                return { success: true, message: "successfully" };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    logout: () => {
        // Clear the token from localStorage
        localStorage.removeItem('accessToken');
        Cookies.remove('accessToken');
    },

    getUserProfile: async () => {
        try {
            const token = Cookies.get('accessToken') || localStorage.getItem('accessToken');
            if (!token) throw new Error('No token found');

            const response = await axios.get(`${API_BASE_URL}/profileUser?accessToken=${token}`, {
                withCredentials: true,
                
            },{
               
            });
            return response.data;
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    // Additional methods like password reset, update profile, etc., can be added here
};

