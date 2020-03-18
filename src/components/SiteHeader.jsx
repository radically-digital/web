import React from 'react';
import { Link } from 'gatsby';

import RDLogo from '../assets/logos/lock-up_wide-gradient.svg';

import Nav from './Nav';

const SiteHeader = () => (
  <header className="site-header">
    <Link to="/">
      <img className="site-header__logo" src={RDLogo} alt="Radically Digital logo" />
    </Link>

    <Nav/>
  </header>
);

export default SiteHeader;
