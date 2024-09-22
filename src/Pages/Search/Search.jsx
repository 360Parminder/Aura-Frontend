import { useEffect, useState } from 'react'
import '../../Styles/Global.css'
import '../../Styles/Mixins.css'
import { contentServices } from '../../Services/contentService'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState(search);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTrending = async () => {
        try {
            const response = await contentServices.home();
            setMovies(response[0].movies);
        } catch (error) {
            console.error('Error fetching trending:', error);
        }
    };

    const fetchSearch = async (query) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await contentServices.search(query);
            setMovies(response.contents || []);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError('Failed to fetch search results. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(search);
        }, 800);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        if (debouncedQuery.length > 2) {
            fetchSearch(debouncedQuery);
        } else {
            setMovies([]);
        }
    }, [debouncedQuery]);

    useEffect(() => {
        fetchTrending();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    };

    return (
        <div className="w-full h-screen dotBackground">
    <div className="flex flex-col items-center justify-center mt-5 w-full">
        <form className="relative w-2/5 flex flex-row items-center" onSubmit={handleSubmit}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute w-[1.8rem] h-[1.8rem] ms-1 fill-white z-10">
                <g>
                    <path
                        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    ></path>
                </g>
            </svg>
            <input
                className="bg-[#16171d] rounded-md ps-10 h-[2.5rem] w-full"
                type="text"
                placeholder="Movies or Shows"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mx-10 overflow-y-scroll"
        style={{ height: '500px' }} // Adjust the height to fit 2 rows as per your design
    >
        {isLoading ? (
            <div className="col-span-full text-center">Loading...</div>
        ) : error ? (
            <div className="col-span-full text-center text-red-500">{error}</div>
        ) : (
            movies.slice(0, 8)?.map((value, index) => (
                <div key={index} className="rounded-lg overflow-hidden appear">
                    <button onClick={() => navigate(`/videoDetails?name=${value?.original_title}&id=${value?._id}&type=${value?.contentType}`)} className="block">
                        <img
                            src={value?.poster_path || 'path_to_fallback_image'}
                            alt={value?.original_title || 'thumbnail'}
                            width={300}
                            height={170}
                            className="w-full h-48 object-cover"
                            style={{ aspectRatio: '300/170', objectFit: 'cover' }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{value?.original_title || 'No Title Available'}</h3>
                            <p className="text-sm text-muted-foreground truncate-2-lines">{value?.overview || 'No Overview Available'}</p>
                        </div>
                    </button>
                </div>
            ))
        )}
    </div>
</div>

    );
};

export default Search;
