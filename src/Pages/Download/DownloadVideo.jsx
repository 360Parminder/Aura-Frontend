import React from 'react'
// import { Download } from 'lucide-react'




// Sample movie data
const movies = [
  { id: 1, title: "Inception", size: "2.3 GB" },
  { id: 2, title: "The Shawshank Redemption", size: "1.8 GB" },
  { id: 3, title: "The Dark Knight", size: "2.1 GB" },
  { id: 4, title: "Pulp Fiction", size: "1.9 GB" },
  { id: 5, title: "Forrest Gump", size: "2.0 GB" },
  { id: 6, title: "The Matrix", size: "1.7 GB" },
  { id: 7, title: "Goodfellas", size: "2.2 GB" },
  { id: 8, title: "The Silence of the Lambs", size: "1.6 GB" },
  { id: 9, title: "Schindler's List", size: "2.4 GB" },
  { id: 10, title: "The Lord of the Rings: The Fellowship of the Ring", size: "2.5 GB" },
]

export default function DownloadVideo() {
  return (
    <div className="min-h-screen bg-black text-gray-100 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-purple-400">Movie Download List</h1>
      </header>
      <main>
        <ul className="space-y-4">
          {movies.map((movie) => (
            <li key={movie.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-purple-300">{movie.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">Size: {movie.size}</p>
                </div>
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                  aria-label={`${movie.title}`}
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