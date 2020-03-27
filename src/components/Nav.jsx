import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ open }) => (
  <nav className="site-nav" open={open}>
    <ul className="site-nav__list">
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/">
          Home
        </Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/about-us">
          About us
        </Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/services">
          Services
        </Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/join-us">
          Join us
        </Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/insights">
          Insights
        </Link>
      </li>
      <li className="site-nav__item site-nav__item--contact">
        <Link className="button button--primary" to="/contact">
          Contact us
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
