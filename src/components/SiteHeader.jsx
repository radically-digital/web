import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/radically-digital-logo.jpg';

import Nav from './Nav';

const SiteHeader = () => (
  <header className="site-header">
    <Link to="/">
      <img className="site-header__logo" src={logo} alt="Radically Digital logo" />
    </Link>

    <Nav/>
  </header>
);

export default SiteHeader;
