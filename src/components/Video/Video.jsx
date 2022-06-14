import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';
import './Video.scss';

const Video = (props) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className="Video">
      <div className="Video__title">
        <Title title={props.title} subtitle={'video'} />
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
