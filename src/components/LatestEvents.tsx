import React, { useEffect, useState } from 'react'
import './LatestEvents.css'
import { IoLayers } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"

interface Event {
  category: string
  title: string
  image: string
  link: string
}

const LatestEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch('/assets/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading events:', error))
  }, [])

  const firstThree = events.slice(0, 3)
  const lastThree = events.slice(3, 6)

  return (
    <div className="latest-events-total">
      <div className="container">
        <div className="top-latest-events">
          <h1>Latest Events</h1>

          <div className="top-three-cards-events">
            <div className="row">
              {firstThree.map((item, index) => (
                <div className="event-card col-4" key={index}>
                  <a href={item.link}>
                    <img src={item.image} alt={item.title} />
                  </a>
                  <button>
                    <p>
                      <IoLayers className='layers-icon' /> {item.category}
                    </p>
                    <p className='title'>
                      {item.title}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="top-three-cards-events ikinci-defe-events">
            <div className="row">
              {lastThree.map((item, index) => (
                <div className="event-card col-4" key={index}>
                  <a href={item.link}>
                    <img src={item.image} alt={item.title} />
                  </a>
                  <button>
                    <p>
                      <IoLayers className='layers-icon' /> {item.category}
                    </p>
                    <p className='title'>
                      {item.title}
                    </p>
                  </button>
                </div>
              ))}
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

export default LatestEvents
