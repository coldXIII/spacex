import React from 'react';
import './Modal.scss';

const Modal = ({ active, setActive, videoSrc }) => {
  return (
    <div
      className={active ? 'Modal Modal__active' : 'Modal'}
      onClick={() => setActive(false)}
    >
      <div className="Modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="Modal__content-video">
          <iframe
            className="Modal__content-video--embed"
            title="falcon 9 launch"
            src={videoSrc}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="Modal__close" onClick={() => setActive(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
