import React from 'react'
import './BrandAssets.css'
import { FaDownload } from "react-icons/fa6";


const BrandAssets: React.FC = () => {
  return (
    <div className="brand-assets-total">
        <div className="container">
            <h4>
                Brand Assets
            </h4>
            <div className="assets-parts">
                <div className="row">
                    <div className="first-assets col-4">
                            <div className="texts">
                                <p className='university-logo-text'>
                                    ADA University Logo
                                </p>

                                <p className='download-text'>
                                    Download <FaDownload />
                                </p>
                            </div>

                            <div className="brand-photos">
                                <img src="https://www.ada.edu.az/assets/img/brand-ada-logo-frame.svg" alt="" />
                                <p>
                                    Our logo is our brand's shining star, the asset that everyone remembers.
                                </p>
                            </div>
                    </div>

                    <div className="second-assets col-4">
                            <div className="texts">
                                <p className='university-logo-text'>
                                    Logo Partnership Lockup
                                </p>

                                <p className='download-text'>
                                    Download <FaDownload />
                                </p>
                            </div>

                            <div className="brand-photos">
                                <img src="https://www.ada.edu.az/assets/img/ada-example-partner-logo.svg" alt="" />
                                <p>
                                    Leverage these tools to proudly demonstrate your collaborative alliance with ADA.
                                </p>
                            </div>
                    </div>

                    <div className="third-assets col-4">
                            <h6>
                                Primary Colors
                            </h6>

                            <div className="colors">
                                <div className="row">
                                    <div className="caspian-blue col-4">
                                        <p>
                                            Caspian Blue
                                        </p>

                                        <button contentEditable suppressContentEditableWarning>
                                            #336178
                                        </button>
                                    </div>
                                    <div className="white col-4">
                                        <p>
                                            White
                                        </p>

                                        <button contentEditable suppressContentEditableWarning>
                                            #ffffff
                                        </button>
                                    </div>
                                    <div className="pomegranate col-4">
                                        <p>
                                            Pomegranate
                                        </p>    

                                        <button contentEditable suppressContentEditableWarning>
                                            #ae485e
                                        </button>
                                    </div>

                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandAssets