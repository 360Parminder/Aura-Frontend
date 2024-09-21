import axios from "axios"

const VIDEO_API = process.env.REACT_APP_VIDEO_API
const VIDEO_KEY = process.env.REACT_APP_VIDEO_KEY
const DOWNLOAD_API = process.env.REACT_APP_DOWNLOAD_API
const DOWNLOAD_KEY = process.env.REACT_APP_DOWNLOAD_KEY

export const contentServices = {

    home: async () => {
        // console.log("start");
        try {
            const response = await axios.get(`${VIDEO_API}/home`, {
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            })
            // console.log("end");
            return response.data

        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    movies: async () => {
        // console.log("start");
        try {
            const response = await axios.get(`${VIDEO_API}/movies`, {
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            })
            // console.log("end");
            return response.data

        } catch (error) {
         
            return { success: false, message: error.message };
        }
    },
    shows: async () => {
        // console.log("start");
        try {
            const response = await axios.get(`${VIDEO_API}/shows`, {
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            })
            // console.log("end");
            return response.data

        } catch (error) {
           
            return { success: false, message: error.message };
        }
    },
    movieDetails: async (name) => {
        try {
            const response = await axios.get(`${VIDEO_API}/search`, {
                params: {
                    query: name
                },
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            });
            return response.data;
        } catch (error) {
           
            return { success: false, message: error.message };
        }
    },
    similarMovies: async (id) => {
        try {
            const response = await axios.get(`${VIDEO_API}/movie/${id}`, {
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            });
            return response.data;
        } catch (error) {
         
            return { success: false, message: error.message };
        }
    },
    seasons: async (id) => {
        try {
            const response = await axios.get(`${VIDEO_API}/show/${id}`, {
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            });
            return response.data;
        } catch (error) {
            
            return { success: false, message: error.message };
        }
    },
    downloadVideo: async (name) => {
        try {
            const response = await axios.get(`${DOWNLOAD_API}/search`, {
                params: {
                    keywords: name,
                    quantity: '10',
                    page: '1'
                },
                headers: {
                    'x-rapidapi-key': DOWNLOAD_KEY,
                    'x-rapidapi-host': 'movie-tv-music-search-and-download.p.rapidapi.com'
                }
            });
            return response.data;
        } catch (error) {
            
            return { success: false, message: error.message };
        }
    },
    search:async(query)=>{
        try {
            const response = await axios.get(`${VIDEO_API}/search`, {
                params: {
                    query: query
                },
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            });
            return response.data;
        } catch (error) {
            
            return { success: false, message: error.message };
        }
    },

}