import React, { useState, useEffect, useRef } from 'react'
import './Numbers.css'
import { PiStudentFill } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiWorld } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";




const Numbers: React.FC = () => {
    const [students, setStudents] = useState(0);
    const [faculty, setFaculty] = useState(0);
    const [partners, setPartners] = useState(0);
    const [alumni, setAlumni] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const numbersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateValue(setStudents, 0, 4946, 2000);
                        animateValue(setFaculty, 0, 306, 2000);
                        animateValue(setPartners, 0, 189, 2000);
                        animateValue(setAlumni, 0, 90.1, 2000);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (numbersRef.current) {
            observer.observe(numbersRef.current);
        }

        return () => {
            if (numbersRef.current) {
                observer.unobserve(numbersRef.current);
            }
        };
    }, [hasAnimated]);

    const animateValue = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        start: number,
        end: number,
        duration: number
    ) => {
        const startTime = performance.now();
        const isDecimal = end % 1 !== 0;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuad = progress * (2 - progress);
            const current = start + (end - start) * easeOutQuad;

            setter(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setter(end);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <div className="total-numbers" ref={numbersRef}>
            <div className="container">
                <div className="all-numbers row">
                    <div className="students-numbers col-3">
                        <div className="students-top">
                            <PiStudentFill className='student-icon' />
                            <h1>{students}</h1>
                        </div>
                        <h5>STUDENTS</h5>
                    </div>
                    <div className="faculty col-3">
                        <div className="faculty-top">
                            <LiaUniversitySolid className='faculty-icon' />
                            <h1>{faculty}</h1>
                        </div>
                        <h5>FACULTY</h5>
                    </div>
                    <div className="partner-universities col-3">
                        <div className="partner-top">
                            <GiWorld className='world-icon' />
                            <h1>{partners}</h1>
                        </div>
                        <h5>PARTNER UNIVERSITIES</h5>
                    </div>
                    <div className="alumni col-3">
                        <div className="alumni-top">
                            <CgWorkAlt className='work-icon' />
                            <h1>{alumni} %</h1>
                        </div>
                        <h5>ALUMNI EMPLOYMENT</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Numbers