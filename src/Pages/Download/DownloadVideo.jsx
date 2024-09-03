import React, { useEffect, useState } from 'react'
import { contentServices } from '../../Services/contentService';
// import { Download } from 'lucide-react'




// Sample movie data
// const movies

export default function DownloadVideo() {
  const [movieData, setMovieData] = useState([]);

  const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
  useEffect(() => {
    const fetchData = async () => {
      const response = await contentServices.downloadVideo(name)
      if (response.success) {
        setMovieData(response)
      } else {
        console.log("error");
      }
    }
    fetchData()
  }, [])
  console.log(movieData);
  return (
    <div className="min-h-screen bg-black text-gray-100 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-purple-400">Movie Download List</h1>
      </header>
      <main>
        <ul className="space-y-4">
          {movieData?.result?.map((value,index) => (
            <li key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-purple-300">{value?.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">Size: {value?.size}</p>
                </div>
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                  aria-label={`${value?.title}`}
                >
                  {/* <Download className="h-5 w-5 mr-2" /> */}
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}