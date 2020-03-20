import React, { useState } from 'react';
import { Link } from 'gatsby';

import RDLogo from '../assets/logos/lock-up_wide-gradient.svg';

import Nav from './Nav';
import NavButton from './NavButton';
const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__toolbar">
        <Link to="/">
          <img className="site-header__logo" src={RDLogo} alt="Radically Digital logo" />
        </Link>

        <NavButton open={open} setOpen={setOpen} />
      </div>

      <Nav open={open} />
    </header>
  )
};

export default SiteHeader;
