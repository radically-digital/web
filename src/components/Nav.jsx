import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav className="site-nav">
    <ul className="site-nav__list">
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/">Home</Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/about-us">About us</Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/services">Services</Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/join-us">Join us</Link>
      </li>
      <li className="site-nav__item">
        <Link className="site-nav__link" to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
