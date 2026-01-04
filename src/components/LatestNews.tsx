import React, { useEffect, useState } from 'react'
import './LatestNews.css'
import { IoLayers } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"
import { loadNewsEvents, type NewsEventItem } from '../api/newsEvents'

const LatestNews: React.FC = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEventItem[]>([])

  useEffect(() => {
    let cancelled = false

    loadNewsEvents()
      .then((data) => {
        if (!cancelled) setNewsEvents(data)
      })
      .catch((error) => console.error('Error loading news events:', error))

    return () => {
      cancelled = true
    }
  }, [])

  const onlyNews = newsEvents.filter((x) => x.type === 'news' || x.type == null)
  const firstThree = onlyNews.slice(0, 3)
  const lastThree = onlyNews.slice(3, 6)

  return (
    <div className="latest-news-total">
      <div className="container">
        <div className="top-latest-news">
          <h1>Latest News</h1>

          <div className="top-three-cards">
            <div className="row">
              {firstThree.map((item, index) => (
                <div className="first-card-event col-4" key={index}>
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

          <div className="top-three-cards ikinci-defe">
            <div className="row">
              {lastThree.map((item, index) => (
                <div className="first-card-event col-4" key={index}>
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
              See All News <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews