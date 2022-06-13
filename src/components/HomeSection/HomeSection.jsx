import React from 'react';
import Button from '../Button/Button';
import './HomeSection.scss';

function HomeSection({ sections }) {
  return sections.map((section, index) => {
    return (
      <section
        className="HomeSection"
        key={index}
        style={{
          background: `url(${section.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="HomeSection__info">
          <h3
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-delay="15"
            className="HomeSection__info-subtitle"
          >
            {section.subtitle}
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-delay="30"
            className="HomeSection__info-title"
          >
            {section.title}
          </h1>
          <div
            className="button"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-delay="35"
          >
            <Button title={section.button} />
          </div>
        </div>
      </section>
    );
  });
}

export default HomeSection;
