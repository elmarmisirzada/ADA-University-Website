import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { Navigation } from 'swiper/modules';
import OneBackground from './OneBackgroundCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BackgroundandCard.css'
import 'swiper/css';
import 'swiper/css/navigation';

interface propertiesOfInfo {
  image: string;
  description: string;
  title: string;
  readMore: string;
}

const BackgroundandCard: React.FC = () => {
  const [information, setInformation] = useState<propertiesOfInfo[]>([])
  const [showCards, setShowCards] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setLoading(true)
    axios.get(`${import.meta.env.BASE_URL}assets/cards.json`)
      .then(res => {
        setInformation(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError('Error loading data')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current) {
        if (cardsRef.current) {
          const rect = cardsRef.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          if (rect.bottom <= windowHeight) {
            setShowCards(true)
          }
        }
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-card-container">
      <div className={`total-car ${showCards ? 'cards-visible' : ''}`} ref={cardsRef}>
        {loading ? (
          <div className="loading-container">
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="menimSwiper"
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 25 },
            }}
          >
            {information.map((info, idx) => (
              <SwiperSlide key={idx}>
                <OneBackground
                  image={info.image}
                  title={info.title}
                  description={info.description}
                  readMore={info.readMore}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="backgroundvideo">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="https://www.ada.edu.az/media/2024/11/05/ada_website_looped_video_final_11_04_2024-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default BackgroundandCard