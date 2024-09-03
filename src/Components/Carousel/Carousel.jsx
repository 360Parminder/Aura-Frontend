import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css';
import thumbnail from '../../assets/images/thumbnail.webp'
import thumbnail2 from '../../assets/images/tumbnail2.webp'
import thumbnail3 from '../../assets/images/thumbnail3.webp'
import thumbnail4 from '../../assets/images/thumbnail4.webp'
export function Carousel({data}) {
  const [emblaRef] = useEmblaCarousel({ loop:true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">

       {
         data?.movies?.slice(0,4)?.map((value,index)=>{
          return(
            <div key={index} className="embla__slide">
            <div className="rounded-lg overflow-hidden">
                  <a href="videoDetails" className="block">
                    <img
                      src={value?.backdrop_path}
                      alt={value?.original_title}
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: "300/170", objectFit: "cover" }}
                    />
                  </a>
                </div>
            </div>
          )
         })
       }
      
       
      </div>
    </div>
  )
}
