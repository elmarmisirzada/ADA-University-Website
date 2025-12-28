import React from 'react';




interface cardProperties {
  image: string;
  description: string;
  title: string;
  readMore: string;

}

const Car: React.FC<cardProperties> = ({ image, title, description, readMore }) => {
  return (
    <div
      className="card card-with-bg"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-label">
        <h2 className="card-title cardname">{title}</h2>
      </div>
      <div className="card-body">
        <p className="card-text carddescription">{description}</p>
        <div className="card-readmore">
          {readMore} <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
};

export default Car;
