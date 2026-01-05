import React, { useState, useEffect, useRef } from 'react'
import './SchoolEngineering.css'

const SchoolEngineering: React.FC = () => {
  const [counts, setCounts] = useState({
    undergraduate: 0,
    alumni: 0,
    graduate: 0,
    male: 0,
    countries: 0,
    female: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = {
      undergraduate: 93,
      alumni: 543,
      graduate: 7,
      male: 68,
      countries: 39,
      female: 32
    }

    const duration = 800
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        undergraduate: Math.floor(targets.undergraduate * progress),
        alumni: Math.floor(targets.alumni * progress),
        graduate: Math.floor(targets.graduate * progress),
        male: Math.floor(targets.male * progress),
        countries: Math.floor(targets.countries * progress),
        female: Math.floor(targets.female * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts(targets)
      }
    }, stepTime)
  }

  return (
    <div className="engineering-total">
        <div className="container">
            <div className="top-engineering">
                <h2>
                    School of IT and Engineering
                </h2>
                <p>
                    The School of Information Technologies and Engineering (SITE) was founded in 2013. IT was founded with a vision to become a center of excellence in education and a hub of scientific research and discovery of global caliber in the region. Our mission is to produce highly intellectual solution providers with innovative and creative minds and enhanced communication skills who will give back to society by finding and designing new ways in which cutting edge technology will improve lives. We strive to create a thriving environment, which encourages gender inclusivity, where education, research and industry meet and melt into practical applications through our initiatives in Big Data research, applications of Artificial Intelligence, and techno-entrepreneurship.
                </p>
            </div>
        </div>

        <div className="middle-engineering" ref={sectionRef}>
            <div className="container">
                <div className="engineering-percentage">
                    <div className="row">
                    <div className="first-percentage col-12 col-md-4">
                            <div className="undergraduate">
                                <div className="sekil-faiz d-flex align-items-center">
                                    <img src="https://www.ada.edu.az/media/2024/09/20/book_16485020_1_.png" alt="" />
                                    <h1>{counts.undergraduate}%</h1>
                                </div>
                                <h4>UNDERGRADUATE</h4>
                            </div>

                            <div className="alumni">
                                <div className="sekil-faiz d-flex align-items-center">
                                    <img src="https://www.ada.edu.az/media/2024/09/20/employee_14641284_2_1_.png" alt="" />
                                    <h1>{counts.alumni}</h1>
                                </div>
                                <h4>ALUMNI</h4>
                            </div>
                        </div>

                        <div className="second-percentage col-12 col-md-4">
                            <div className="graduate">
                                <div className="sekil-faiz d-flex align-items-center">
                                    <img src="https://www.ada.edu.az/media/2024/09/20/study_566985_3_1_.png" alt="" />
                                    <h1>{counts.graduate}%</h1>
                                </div>
                                <h4>GRADUATE</h4>
                            </div>

                            <div className="alumni">
                                <div className="sekil-faiz d-flex align-items-center">
                                    <img src="https://www.ada.edu.az/media/2024/09/20/student_596717_1_.png" alt="" />
                                    <h1>{counts.male}%</h1>
                                </div>
                                <h4>MALE</h4>
                            </div>
                        </div>

                        <div className="first-percentage col-12 col-md-4">
                            <div className="undergraduate">
                                <div className="sekil-faiz d-flex align-items-center">
                                    <img src="https://www.ada.edu.az/media/2024/09/20/pandemic_2790625_1_1_.png" alt="" />
                                    <h1>{counts.countries}</h1>
                                </div>
                                <h4>STUDENTS FROM COUNTRIES</h4>
                            </div>

                            <div className="alumni">
                                <div className="sekil-faiz d-flex align-items-center">
                                    <img src="https://www.ada.edu.az/media/2024/09/20/graduated_1615715_2_-1.png" alt="" />
                                    <h1>{counts.female}%</h1>
                                </div>
                                <h4>FEMALE</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolEngineering