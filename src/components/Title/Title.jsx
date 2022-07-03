import React from 'react';
import './Title.scss';

const Title = ({ subtitle, title }) => {
  return (
    <div className="Title">
      <h2
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-once="true"
        data-aos-delay="15"
      >
        {subtitle}
      </h2>
      <h1
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-once="true"
        data-aos-delay="20"
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
