import axios from "axios"

const VIDEO_API =process.env.REACT_APP_VIDEO_API
const VIDEO_KEY =process.env.REACT_APP_VIDEO_KEY

export const contentServices ={
    
    home: async ()=>{
        // console.log("start");
        try {
            const response = await axios.get(`${VIDEO_API}/home`,{
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                  }
            })
            // console.log("end");
            return response.data
            
        } catch (error) {
            console.log("error",error);
            return { success: false, message: error.message };
        }
    },

    movies: async()=>{
        // console.log("start");
        try {
            const response = await axios.get(`${VIDEO_API}/movies`,{
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                  }
            })
            // console.log("end");
            return response.data
            
        } catch (error) {
            console.log("error",error);
            return { success: false, message: error.message };
        }
    },
    shows: async()=>{
        // console.log("start");
        try {
            const response = await axios.get(`${VIDEO_API}/shows`,{
                headers: {
                    'x-rapidapi-key': VIDEO_KEY,
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                  }
            })
            // console.log("end");
            return response.data
            
        } catch (error) {
            console.log("error",error);
            return { success: false, message: error.message };
        }
    }
}