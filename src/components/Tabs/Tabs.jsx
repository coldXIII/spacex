import React, { useState } from 'react';
import './Tabs.scss';

const Tabs = (props) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="Tabs__container">

      <div className="Tabs__container-bg">
        {props.data.map((item, index) => {
          return (
            <img
              key={`${index} + ${item.image}`}
              src={item.image}
              alt="falcon"
              className={toggleState === index ? 'image active-image' : 'image'}
            />
          );
        })}
      </div>

      <div className="Tabs__container-info">
        
        <div className="Tabs__container-info--title">
          <h2>{props.subtitle}</h2>
          <h1>{props.title}</h1>
        </div>

        <div className="Tabs__container-info--buttons">
          {props.data.map((item, index) => {
            return (
              <button
                key={index}
                className={toggleState === index ? 'tab active' : 'tab'}
                onClick={() => toggleTab(index)}
              >
                {item.tab}
              </button>
            );
          })}
        </div>

        <div className="Tabs__container-info--contentbox">
          {props.data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  toggleState === index ? 'content active-content' : 'content'
                }
              >
                <p data-aos="fade-up" data-aos-once="true">
                  {item.text}
                </p>
                <ul data-aos="fade-up" data-aos-once="true">
                  {item.info.map((item, index) => {
                    return (
                      <li key={`${index} + ${item.value}`}>
                        <span>{item.characteristic}</span>
                        <span>{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
