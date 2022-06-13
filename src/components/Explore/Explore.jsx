import React from 'react';
import './Explore.scss';
import Button from '../Button/Button';

const Planet = (props) => {
  return (
    <section className="Explore Page">
      <div className="Explore__image">
        <img src={props.planet} alt={props.title} />
      </div>
      <article
        className="Explore__article"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h3>mission</h3>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Button
          title={'explore'}
          style={{ paddingLeft: '4rem', paddingRight: '4rem' }}
        />
      </article>
    </section>
  );
};

export default Planet;
