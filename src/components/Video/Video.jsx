import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Video.scss';

const Video = (props) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className="Video">
      <div className="Video__title">
        <h3 data-aos="fade-up" data-aos-offset="0" data-aos-once="true">
         video
        </h3>
        <h1 data-aos="fade-up" data-aos-offset="0" data-aos-once="true">
        {props.title}
        </h1>
      </div>
      <div className="Video__box">
        <picture>
          <source
            srcSet={props.webpSrc}
            alt="falcon9 launch"
            type="image/webp"
          />
          <img
            className="video__image"
            src={props.jpgSrc}
            alt="falcon9 launch"
          />
        </picture>
        <button className="Video__link" onClick={() => setModalActive(true)}>
          <i className="fa-solid fa-play"></i>
        </button>
      </div>
      <Modal
        videoSrc={props.videoSrc}
        className="Modal"
        active={modalActive}
        setActive={setModalActive}
      />
    </section>
  );
};

export default Video;
