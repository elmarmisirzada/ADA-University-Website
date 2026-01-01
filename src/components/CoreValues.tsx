import React from 'react'
import './CoreValues.css'
import { FaCheck } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { BiFemale } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";






const CoreValues: React.FC = () => {
    return (
        <div className="core-total">
            <div className="container">
                <div className="core-selection">
                    <button>
                        <div className="core-four-part">
                            <div className="row">
                                <div className="first-part col-3">
                                    <h2>Core Values</h2>
                                    <p><FaCheck /> Academic excellence</p>
                                    <p><FaCheck /> Accountability and shared governance</p>
                                    <p><FaCheck /> Honor, integrity and transparency</p>
                                    <p><FaCheck /> Diversity, collaboration and communication</p>
                                    <p><FaCheck /> Social responsibility</p>
                                </div>

                                <div className="second-part col-3">
                                    <h2>Schools</h2>
                                    <p><FaCheck /> School of Public and International Affairs</p>
                                    <p><FaCheck /> School of Business</p>
                                    <p><FaCheck /> School of IT and Engineering</p>
                                    <p><FaCheck /> School of Education</p>
                                    <p><FaCheck /> School of Law</p>
                                    <p><FaCheck /> School of Agricultural and Food Sciences</p>
                                    <p><FaCheck /> School of Design and Architecture</p>
                                </div>

                                <div className="third-part col-3">
                                    <h2>Students</h2>
                                    <p><IoPerson /> 4340 students</p>
                                    <p><GiGraduateCap /> 84% undergraduate</p>
                                    <p><GiGraduateCap /> 16% graduate</p>
                                    <p><BiFemale /> 52% female</p>
                                    <p><FaMale /> 48% male</p>
                                </div>

                                <div className="fourth-part col-3">
                                    <h2>Alumni</h2>
                                    <p><GiWorld /> 2500 alumni in 48 countries</p>
                                    <p><MdOutlineWork /> 4442 alumni of ADA University Executive Education</p>
                                </div>


                            </div>
                        </div>
                    </button>
                </div>
                <div className="information">
                    <button>
                        <p>
                            With students, faculty, and staff from 53 countries around the world, diversity illustrates one of our core values. International representation creates <br />
                             a stimulating environment and learning happens everywhere around us.
                        </p>
                    </button>
                </div>

                <div className="brand">
                    <h2>
                        Our Brand
                    </h2>

                    <p>
                        ADA University is a vision of the future brought to life. Ours is a community of academic excellence, accountability, shared governance, honor, integrity, transparency, diversity, collaboration, communication and social responsibility that empowers individuals to challenge conventional thinking in pursuit of new ideas. Rallying around the ADA Flag, we uphold its symbols.
                    </p>

                    <p>
                        <span className="blue-text">Blue</span> in the ADA Flag stands for loyalty and communication. Our loyalty to core values has been rock solid. We communicate our story well and transmit our values among ourselves through the years. <span className="white-text">White</span> means purity of honor, integrity and transparency. We pledge to honor and live by honor. White also stands for the purity of mind, clean of prejudices, in search of knowledge and enlightenment. <span className="red-text">Red</span> symbolizes vibrancy, change, and innovation. ADA is a thriving locale. In this volcano of ideas and initiatives, we encourage minds to erupt. We challenge static thoughts. We conquer heights through continuous learning and restless innovation of selves.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoreValues