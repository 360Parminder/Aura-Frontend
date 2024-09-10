import interstellar from '../../assets/images/interstellar.jpg'
import inception from '../../assets/images/inception.jpg'
import { motion } from "framer-motion";
import '../../Styles/Global.css'
import { useNavigate } from 'react-router-dom';
import { contentServices } from '../../Services/contentService';
import { useEffect, useState } from 'react';
export default function VideoDetails() {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const id = queryParams.get('id');
    const type = queryParams.get('type');
    console.log(name, id);

    const [movieDetails, setMovieDetails] = useState([]);
    const [similarMovies, setSimilarMovies] = useState(null);
    const [seasons, setSeasons] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (type == "movie") {
                    const response = await contentServices.similarMovies(id);
                    setMovieDetails(response?.movie)
                    setSimilarMovies(response?.similarMovies)
                    console.log("Similar movies:", response);

                }
                else if (type == "show") {
                    const response = await contentServices.seasons(id);
                    // setShowDetails(response?.show)
                    setMovieDetails(response?.show)
                    setSeasons(response?.seasons)
                    console.log("show:", response);
                }
            } catch (error) {

            }
        }
        fetchData()
    }, [])
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12">
                <motion.div
                    initial={{
                        opacity: 0,
                        z: 100,
                        y: 100,
                    }}
                    animate={{
                        opacity: 1,
                        z: 0,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        },
                    }}

                    className="flex flex-col gap-6 bg-black p-6 rounded-lg" style={{ backgroundImage: `url(${movieDetails?.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold">{movieDetails?.original_title}</h1>
                        <p className="text-muted-foreground text-sm">{movieDetails?.release_date ? movieDetails?.release_date : movieDetails?.first_aired} | 2h 49m</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(`/downloadVideo?name=${movieDetails?.original_title}`)} className="outlineButton flex items-center gap-2">
                            <DownloadIcon className="" />
                            Download
                        </button>
                        <button onClick={() => navigate('/player')} className="outlineButton flex items-center gap-2">
                            <PlayIcon className="" />
                            Play
                        </button>
                    </div>
                    <div className="grid gap-2">
                        <p className="text-muted-foreground">Available on:</p>
                        <div className="flex items-center gap-4">
                            {
                                movieDetails?.sources?.map((value, index) => {
                                    return (
                                        <a key={index} href={value?.link} target="_blank" className="flex items-center gap-2">
                                            <NetworkIcon className="w-6 h-6" />
                                            <span className="text-sm">{value?.display_name}</span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* <div className="grid gap-2">
                        <p className="text-muted-foreground">Cast:</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">

                                <span className="text-sm">Matthew McConaughey</span>
                            </div>
                            <div className="flex items-center gap-2">

                                <span className="text-sm">Anne Hathaway</span>
                            </div>
                            <div className="flex items-center gap-2">

                                <span className="text-sm">Jessica Chastain</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="grid gap-2">
                        <p className="text-muted-foreground">Genre:</p>
                        <div className="flex items-center gap-4">
                            {
                                movieDetails?.genres?.map((value, index) => {
                                    return (
                                        <div key={index} className="flex items-center gap-2">
                                            <FilmIcon className="w-4 h-4" />
                                            <span className="text-sm">{value}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </motion.div>
                {/* <div className="flex flex-col gap-6">
                    <img
                        src={inception}
                        alt="Interstellar"
                        width={800}
                        height={450}
                        className="w-full h-auto rounded-lg object-cover"
                        style={{ aspectRatio: "800/450", objectFit: "cover" }}
                    />
                </div> */}


                <div className="w-full gap-4 mt-10 appear">
                    {
                        similarMovies ?
                            <>
                                <h2 className="text-2xl font-bold mb-10">Related Movies</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {
                                        similarMovies?.slice(0, 12)?.map((value, index) => {
                                            return (
                                                <a key={index} href="#" className="group" prefetch={false}>
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <img
                                                            src={value?.poster_path}
                                                            alt={value?.original_title}
                                                            width={300}
                                                            height={450}
                                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                            style={{ aspectRatio: "300/450", objectFit: "cover" }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                                            <div className="text-white text-sm font-medium">{value?.original_title}</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </> :
                            <>
                                <h2 className="text-2xl font-bold mb-10">Show Seasons</h2>
                                    
                                    {
                                        seasons?.map((value,index)=>{
                                            return(
                                                <>
                                                <h2 className="text-2xl font-bold mb-10">Season : {value?.season}</h2>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {
                                        value?.episodes?.map((value, index) => {
                                            return (
                                                <a key={index} href="#" className="group" prefetch={false}>
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <img
                                                            src={value?.thumbnail_path}
                                                            alt={value?.title}
                                                            width={300}
                                                            height={450}
                                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                            style={{ aspectRatio: "300/450", objectFit: "cover" }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                                            <div className="text-white text-sm font-medium">{value?.title}</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                                                </>
                                            )
                                        })
                                    }
                               
                                
                            </>

                    }






                </div>
            </div>
        </div>
    )
}

function AppleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
    )
}


function DownloadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function FilmIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 3v18" />
            <path d="M3 7.5h4" />
            <path d="M3 12h18" />
            <path d="M3 16.5h4" />
            <path d="M17 3v18" />
            <path d="M17 7.5h4" />
            <path d="M17 16.5h4" />
        </svg>
    )
}


function HdmiPortIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" />
            <path d="M7.5 12h9" />
        </svg>
    )
}


function NetworkIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
        </svg>
    )
}


function PlayIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}