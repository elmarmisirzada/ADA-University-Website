import React, { useState, useEffect } from 'react'
import './MeetEngineeringFaculty.css'

interface Faculty {
  id: number;
  name: string;
  position: string;
  school: string;
  image: string;
  link: string;
}

const MeetEngineeringFaculty: React.FC = () => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [staff, setStaff] = useState<Faculty[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/faculty.json`)
      .then(response => response.json())
      .then(data => setFaculty(data))
      .catch(error => console.error('Error loading faculty data:', error));

    fetch(`${import.meta.env.BASE_URL}assets/staff.json`)
      .then(response => response.json())
      .then(data => setStaff(data))
      .catch(error => console.error('Error loading staff data:', error));
  }, []);

  return (
    <div className="engineering-faculty-total">
        <div className="container">
            <div className="meet-our-faculty-part">
                <h2>
                    Meet Our Faculty
                </h2>
                <p>
                    The School of it faculty members are recognized experts in their fields and are dedicated to the study and practice of it and economics. They possess an <br />
                     extensive scholarship and wide-ranging real-world experience, which brings breadth and depth to classroom discussions.
                </p>
            </div>

            <div className="information-about-teachers">
                {faculty.map((member) => (
                  <a key={member.id} href={member.link} className="faculty-card" target="_blank" rel="noopener noreferrer">
                    <img src={member.image} alt={member.name} width="360" height="360" />
                    <h3>{member.name}</h3>
                    <p className="faculty-position">{member.position}</p>
                    <p className="faculty-school">{member.school}</p>
                  </a>
                ))}
            </div>

            <div className="meet-our-faculty-part my-5">
                <h2>
                    Staff Members
                </h2>
                
            </div>

            <div className="information-about-staff-members">
                {staff.map((member) => (
                  <a key={member.id} href={member.link} className="faculty-card" target="_blank" rel="noopener noreferrer">
                    <img src={member.image} alt={member.name} width="360" height="360" />
                    <h3>{member.name}</h3>
                    <p className="faculty-position">{member.position}</p>
                    <p className="faculty-school">{member.school}</p>
                  </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MeetEngineeringFaculty