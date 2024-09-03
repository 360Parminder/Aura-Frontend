import React, { useEffect, useState } from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import CardContainer from '../../Components/Cards/CardContainer/CardContainer'
import { contentServices } from '../../Services/contentService'
import { motion } from 'framer-motion'
import '../../Styles/Global.css'
const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [popularShows, setPopularShows] = useState([]);
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [upcomingShows, setUpcomingShows] = useState([]);
  // console.log("home");

  const fetchData = async () => {
    const response = await contentServices.home()
    setTrendingMovies(response[0])
    setPopularMovies(response[1])
    setTopRatedMovies(response[2])
    setUpcomingMovies(response[3])
    setTrendingShows(response[5])
    setPopularShows(response[5])
    setTopRatedShows(response[6])
    setUpcomingShows(response[7])


    console.log(response);
  }


  useEffect(() => {

    fetchData()

  }, [])

  return (
    <>
      <HeroSection />
      {/* <CardContainer /> */}
      <section className="mb-12 md:mb-16 px-10 appear">
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
          }} className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">Trending Movies</h2>
          <a href="#" className="text-primary hover:underline">
            See all
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            trendingMovies?.movies?.slice(0, 8)?.map((value, index) => {
              return (
                <div key={index} className="rounded-lg overflow-hidden appear">
                  <a href={`videoDetails?${value?._id.toString()}`} className="block">
                    <img
                      src={value?.poster_path || thumbnail}
                      alt={value?.original_title || "thumbnail"}
                      width={300}
                      height={170}
                      className="w-full h-48 object-cover"
                      style={{ aspectRatio: "300/170", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{value?.original_title || "thumbnail"}</h3>
                      <p className="text-sm text-muted-foreground truncate-2-lines">{value?.overview || "thumbnail"}</p>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="mb-12 md:mb-16 px-10 appear">
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
          }} className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">Trending Shows</h2>
          <a href="#" className="text-primary hover:underline">
            See all
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            trendingShows?.movies?.slice(0, 8)?.map((value, index) => {
              return (
                <div key={index} className="rounded-lg overflow-hidden appear">
                  <a href="videoDetails" className="block">
                    <img
                      src={value?.poster_path || thumbnail}
                      alt={value?.original_title || "thumbnail"}
                      width={300}
                      height={170}
                      className="w-full h-48 object-cover"
                      style={{ aspectRatio: "300/170", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{value?.original_title || "thumbnail"}</h3>
                      <p className="text-sm text-muted-foreground truncate-2-lines">{value?.overview || "thumbnail"}</p>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home