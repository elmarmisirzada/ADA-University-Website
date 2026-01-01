import React from 'react'
import './Partners.css'
import { FaCheck } from "react-icons/fa6";
import { GiGraduateCap } from 'react-icons/gi';
import { BiFemale } from 'react-icons/bi';
import { FaMale } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const Partners: React.FC = () => {
    return (
        <div className="partners-total">
            <div className="container">
                <button>
                    <div className="four-part-partners">
                        <div className="row">
                            <div className="first-partner col-3">
                                <h2>
                                    Partners
                                </h2>
                                <a href="https://www.luiss.edu/">Luiss University</a>
                                <a href="https://www.unibo.it/en">Bologna University</a>
                                <a href="https://www.polimi.it/">Politecnico di Milano</a>
                                <a href="https://www.polito.it/">Politecnico di Torino</a>
                                <a href="https://www.uniroma1.it/en/pagina-strutturale/home">Sapienza University of Rome</a>
                            </div>

                            <div className="second-partner col-3">
                                <h2>
                                    Degrees
                                </h2>
                                <a href="https://www.ada.edu.az/en/schools/safs/programs/agricultural-and-food-system-management"> <FaCheck />
                                    Agricultural and Food System Management</a>
                                <a href="https://www.ada.edu.az/en/schools/safs/programs/agricultural-technologies"> <FaCheck />
                                    Agricultural Technologies</a>
                                <a href="https://www.ada.edu.az/en/schools/safs/programs/animal-science"> <FaCheck />
                                    Animal Science</a>
                                <a href="https://www.ada.edu.az/en/schools/sda/programs/bcd"> <FaCheck />
                                    Communication Design </a>
                                <a href="https://www.ada.edu.az/en/schools/site/programs/electrical-and-electronics-engineering"> <FaCheck />
                                    Electrical and Electronics Engineering</a>
                                <a href="https://www.ada.edu.az/en/schools/safs/programs/food-technologies"> <FaCheck />
                                    Food Technologies</a>
                                <a href="https://www.ada.edu.az/en/schools/sb/programs/global-management-and-politics-gmap"> <FaCheck />
                                    Global Management and Politics</a>
                                <a href="https://www.ada.edu.az/en/schools/sda/programs/interior-design"> <FaCheck />
                                    Interior Design</a>
                                <a href="https://www.ada.edu.az/en/schools/sda/programs/bup"> <FaCheck />
                                    Urban Planning</a>
                            </div>

                            <div className="third-partner col-3">
                                <h2>
                                    Certificate <br /> Programs
                                </h2>
                                <a href="https://www.ada.edu.az/en/schools/safs/programs/certificate-csaps">Agricultural and Food Sciences</a>
                                <a href="https://www.ada.edu.az/en/schools/sda/programs/executive-program">Design and Arhcitecture</a>

                            </div>

                            <div className="fourth-partner col-3">
                                <h2>
                                    Students
                                </h2>
                                <p><IoPerson /> 286 students</p>
                                <p><GiGraduateCap /> 70% undergraduate</p>
                                <p><GiGraduateCap /> 30% graduate</p>
                                <p><BiFemale /> 60% female</p>
                                <p><FaMale /> 40% male</p>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Partners