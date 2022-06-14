import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

const links = ['mission', 'launches', 'careers', 'updates', 'shop'];
const mobileLinks = [
  {
    name: 'falcon 9',
    to: '/vehicles/falcon9',
  },
  {
    name: 'falcon heavy',
    to: '/vehicles/falcon-heavy',
  },
  {
    name: 'dragon',
    to: '/vehicles/dragon',
  },
  {
    name: 'starship',
    to: '/vehicles/starship',
  },
  {
    name: 'human spaceflight',
    to: '/human-spaceflight',
  },
  {
    name: 'rideshare',
    to: '/rideshare',
  },
  {
    name: 'starlink',
    to: '/',
  },
];

const SideBar = ({ active, setActive }) => {
  return (
    <div className={active ? 'SideBar SideBar__active' : 'SideBar'}>
      <ul className="SideBar__menu">
        {links.map((link, index) => {
          return (
            <li className="SideBar__menu-item" key={index}>
              {link}
            </li>
          );
        })}
      </ul>
      <ul className="SideBar__mobilemenu">
        {mobileLinks.map((link, index) => {
          return (
            <Link to={link.to} className="SideBar__menu-item" key={index}>
              {link.name}
            </Link>
          );
        })}
      </ul>
      <div className="SideBar__close" onClick={() => setActive(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default SideBar;
