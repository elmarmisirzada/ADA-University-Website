import React from 'react'
import './Experience.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Experience: React.FC = () => {
    return (
        <div className="total-experience">
            <div className="container">
                <div className="top-experience">
                    <h1>
                        #ADA4ALL
                    </h1>

                    <button>
                        Experience Student Life
                    </button>
                </div>

                <div className="images">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <img src="https://www.ada.edu.az/media/2024/11/29/img_2673-1.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://www.ada.edu.az/media/2024/11/29/02_adaforall_slide.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://www.ada.edu.az/assets/img/content/03_adaforall-slide.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://www.ada.edu.az/assets/img/content/04_adaforall-slide.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="https://www.ada.edu.az/media/2024/11/29/photo_2024_11_29_14_52_33_copy.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>

                

            </div>

            <section className="ada-is-section">
                    <div className="back-title">ADA IS</div>
                    <div className="ada-is-vertical-container">
                        <div className="animated-text">
                            <span className="text-item">innovative campus</span>
                            <span className="text-item">venue of academic excellence</span>
                            <span className="text-item">melting pot of cultures</span>
                            <span className="text-item">ever-growing community</span>
                            <span className="text-item">home</span>
                            <span className="text-item clone">innovative campus</span>
                            <span className="text-item clone">venue of academic excellence</span>
                            <span className="text-item clone">melting pot of cultures</span>
                            <span className="text-item clone">ever-growing community</span>
                            <span className="text-item clone">home</span>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Experience