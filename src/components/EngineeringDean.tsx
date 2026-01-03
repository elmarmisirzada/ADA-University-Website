import React from 'react'
import './EngineeringDean.css'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


const EngineeringDean: React.FC = () => {
  return (
    <div className="enginnering-dean-total">
        <div className="container">
            <div className="information-abzatdin">
                <img src="https://www.ada.edu.az/media/2024/05/31/1to1_medium/abzatdin_adamov.jpg" alt="" width="245" height="245" />
                <p>
                    <FaQuoteLeft /> To be the next World changers, engineering students must grasp certain fundamental knowledge in their <br />
                     primary field understanding essential concepts and how they work together. When the next Big Thing <br />
                      comes (AI, IoT, Big Data, Blockchain, etc.), it will not be just buzzword to chase, instead they will understand <br />
                       all technical implications behind and its real value. <FaQuoteRight />

                </p>
                <a href="https://www.ada.edu.az/en/schools/site/members/faculty/55-abzatdin-adamov">Abzatdin Adamov</a>
                <strong>Dean</strong>
            </div>
        </div>
    </div>

  )
}

export default EngineeringDean