import React from 'react'
import './NewEvents.css'
import { IoLayers } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";


const NewEvents: React.FC = () => {
    return (
        <div className="total-new-events">
            <div className="container">
                <div className="top-new-events">
                    <h1>
                        New & Events
                    </h1>

                    <div className="top-three-cards">
                        <div className="row">
                            <div className="first-card-event col-4">
                                <a href="https://www.ada.edu.az/en/news/728-ada-university-launches-international-certificate-program-in-strategic-and-ai-supported-assessment">
                                    <img src="" alt="" />
                                </a>
                                <button>
                                    <p>
                                        <IoLayers className='layers-icon' /> Education
                                    </p>

                                    <p className='title'>
                                        ADA University Launches International Certificate Program in Strategic and AI-Supported Assessment
                                    </p>
                                </button>
                            </div>

                            <div className="first-card-event col-4">
                                <a href="https://www.ada.edu.az/en/news/728-ada-university-launches-international-certificate-program-in-strategic-and-ai-supported-assessment">
                                    <img src="https://www.ada.edu.az/media/2025/12/23/604245896_18438917626103018_837760399101567775_n.jpg" alt="" />
                                </a>
                                <button>
                                    <p>
                                        <IoLayers className='layers-icon' /> Design & Architecture
                                    </p>

                                    <p className='title'>
                                        ADA University’s Newly Established Faculty of Design and Architecture Hosts Seminar Series within Urban Awareness Campaign                                    </p>
                                </button>
                            </div>

                            <div className="first-card-event col-4">
                                <a href="https://www.ada.edu.az/en/news/728-ada-university-launches-international-certificate-program-in-strategic-and-ai-supported-assessment">
                                    <img src="https://www.ada.edu.az/media/2025/12/23/599501422_883865447312747_5608468173990884845_n.jpg" alt="" />
                                </a>
                                <button>
                                    <p>
                                        <IoLayers className='layers-icon' /> General
                                    </p>

                                    <p className='title'>
                                        Commemorative Event Honoring National Leader Heydar Aliyev Held at George Washington University 
                                        </p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="middle-event-button">
                        <button>
                            See All News <FaArrowRight />

                        </button>
                    </div>

                    <div className="top-three-cards ikinci-defe">
                        <div className="row">
                            <div className="first-card-event col-4">
                                <a href="https://www.ada.edu.az/en/news/728-ada-university-launches-international-certificate-program-in-strategic-and-ai-supported-assessment">
                                    <img src="https://www.ada.edu.az/media/2025/06/16/b7690832_28c3_447e_b9cd_691076955f2a.jpeg" alt="" />
                                </a>
                                <button>
                                    <p>
                                        <IoLayers className='layers-icon' /> Admission
                                    </p>

                                    <p className='title'>
                                        Açıq Qapı Günləri: ADA Universitetində sizi gözləyirik!
                                    </p>
                                </button>
                            </div>

                            <div className="first-card-event col-4">
                                <a href="https://www.ada.edu.az/en/news/728-ada-university-launches-international-certificate-program-in-strategic-and-ai-supported-assessment">
                                    <img src="https://www.ada.edu.az/media/2025/02/20/photo_2025_02_18_19_46_21.jpg" alt="" />
                                </a>
                                <button>
                                    <p>
                                        <IoLayers className='layers-icon' /> Admission
                                    </p>

                                    <p className='title'>
                                        Shaping Policies for Impact: Seminar on Public Administration & Policy Analysis                                    </p>
                                </button>
                            </div>

                            <div className="first-card-event col-4">
                                <a href="https://www.ada.edu.az/en/news/728-ada-university-launches-international-certificate-program-in-strategic-and-ai-supported-assessment">
                                    <img src="https://www.ada.edu.az/media/2025/01/27/31_yanvar_web.jpg" alt="" />
                                </a>
                                <button>
                                    <p>
                                        <IoLayers className='layers-icon' /> Admisson
                                    </p>

                                    <p className='title'>
                                        First Info Session of ADA University's Master of Laws 
                                        </p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="middle-event-button last-defe">
                        <button>
                            See All Events <FaArrowRight />

                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewEvents