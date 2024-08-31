import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css';
import thumbnail from '../../assets/images/thumbnail.webp'
import thumbnail2 from '../../assets/images/tumbnail2.webp'
import thumbnail3 from '../../assets/images/thumbnail3.webp'
import thumbnail4 from '../../assets/images/thumbnail4.webp'
export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop:true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
        <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src={thumbnail}
                  alt="Movie 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
              </a>
            </div>
        </div>
        <div className="embla__slide">
        <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src={thumbnail2}
                  alt="Movie 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
              </a>
            </div>
        </div>
        <div className="embla__slide">
        <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src={thumbnail3}
                  alt="Movie 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
              </a>
            </div>

        </div>
        <div className="embla__slide">
        <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src={thumbnail4}
                  alt="Movie 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
              </a>
            </div>
            
        </div>
      </div>
    </div>
  )
}
