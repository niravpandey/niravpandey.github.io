import React from 'react';
import './styles.css';

const TimelineItem = ({ image, title, name, description, time }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <img src={image} alt={name} className="timeline-image" />
      </div>
      <div className="timeline-right">
        <span className='timeline-title'>{title}</span>
        <span className="timeline-name">{name}</span>
        <p className="timeline-description">{description}</p>
        <span className="timeline-time">{time}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
