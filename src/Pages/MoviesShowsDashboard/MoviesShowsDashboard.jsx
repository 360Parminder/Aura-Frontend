import { Carousel } from "../../Components/Carousel/Carousel";
import thumbnail from '../../assets/images/thumbnail.webp'
import thumbnail2 from '../../assets/images/tumbnail2.webp'
import thumbnail3 from '../../assets/images/thumbnail3.webp'
import thumbnail4 from '../../assets/images/thumbnail4.webp'
import '../../Styles/Global.css'
import { motion } from "framer-motion";
import { contentServices } from "../../Services/contentService";
import { useEffect, useState } from "react";

export default function MoviesandShows() {
  const [movieData, setMovieData] = useState([]);
  const [showData, setShowData] = useState([]);
  
  
  
  
  const fetchMovies = async () => {
    const response = await contentServices.movies()
    // console.log(response);
    setMovieData(response)
  }
  const fetchShows=async()=>{
    const response = await contentServices.shows()
    console.log("shows",response);
    setShowData(response)
  }
  useEffect(() => {
    fetchMovies()
    fetchShows()
  }, [])


  return (
    <div className=" text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-12 md:mb-16">
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
            <h2 className="text-2xl font-bold md:text-3xl">Movies</h2>
            <a href="#" className="text-primary hover:underline">
              See all
            </a>
          </motion.div>
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

            className="flex gap-4 overflow-x-auto snap-x snap-mandatory my-10">
            <Carousel data={movieData} />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              movieData?.movies?.slice(4, 12)?.map((value, index) => {
                return (
                  <div key={index} className="rounded-lg overflow-hidden appear">
                    <a href="videoDetails" className="block">
                      <img
                        src={value?.poster_path}
                        alt={value?.original_title}
                        width={300}
                        height={170}
                        className="w-full h-48 object-cover"
                        style={{ aspectRatio: "300/170", objectFit: "cover" }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{value?.original_title}</h3>
                        <p className="text-sm text-muted-foreground truncate-2-lines">{value?.overview}</p>
                      </div>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-6 md:mb-8 appear">
            <h2 className="text-2xl font-bold md:text-3xl">Shows</h2>
            <a href="#" className="text-primary hover:underline">
              See all
            </a>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory mb-10 appear">
            <Carousel data={showData} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


            {
                showData?.movies?.slice(4, 12)?.map((value,index)=>{
                  return(
                    <div key={index} className="rounded-lg overflow-hidden appear">
                    <a href="videoDetails" className="block">
                      <img
                        src={value?.poster_path}
                        alt={value?.original_title}
                       
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: "300/170", objectFit: "center" }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{value?.original_title}</h3>
                        <p className="text-sm text-muted-foreground truncate-2-lines">{value?.overview}</p>
                      </div>
                    </a>
                  </div>
                  )
                })
            }
           
          
          </div>
        </section>
      </div>
    </div>
  )
}