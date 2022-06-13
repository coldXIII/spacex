import React from 'react';
import './Intro.scss';

const Intro = ({ background, title, subtitle }) => {
  return (
    <section
      className="Intro"
      style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}
    >

      <div className="Intro-title">
        <h1 data-aos="fade-up" data-aos-duration="3000">
          {title}
        </h1>
        <h3 data-aos="fade-up" data-aos-duration="3000">
          {subtitle}
        </h3>
      </div>
    </section>
  );
};

export default Intro;
