import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css';
import thumbnail from '../../assets/images/thumbnail.webp'
import thumbnail2 from '../../assets/images/tumbnail2.webp'
import thumbnail3 from '../../assets/images/thumbnail3.webp'
import thumbnail4 from '../../assets/images/thumbnail4.webp'
import { useNavigate } from 'react-router-dom';
export function Carousel({data}) {
  const [emblaRef] = useEmblaCarousel({ loop:true }, [Autoplay()])
  const navigate =useNavigate();
  return (
    <div className="embla w-full h-full" ref={emblaRef}>
      <div className="embla__container">

       {
         data?.movies?.slice(0,4)?.map((value,index)=>{
          return(
            <div key={index} className="embla__slide">
            <div className="rounded-lg overflow-hidden">
                  <button onClick={()=>navigate(`/videoDetails?name=${value?.original_title}&id=${value?._id}`)} className="block">
                    <img
                      src={value?.backdrop_path}
                      alt={value?.original_title}
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "300/170", objectFit: "cover" }}
                    />
                  </button>
                </div>
            </div>
          )
         })
       }
      
       
      </div>
    </div>
  )
}
