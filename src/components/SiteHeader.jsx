import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import RDLogo from '../assets/logos/lock-up_wide-gradient.svg';

import Nav from './Nav';
import NavButton from './NavButton';

const query = graphql`
  query {
    site {
      siteMetadata {
        urlMain
        urlTransitioning
      }
    }
  }
`;

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const {
    site: {
      siteMetadata: { urlMain },
    },
  } = useStaticQuery(query);

  return (
    <header className="site-header">
      <div className="site-header__toolbar">
        <a href={urlMain}>
          <img
            className="site-header__logo"
            src={RDLogo}
            alt="Radically Digital logo"
          />
        </a>

        <NavButton open={open} setOpen={setOpen} />
      </div>

      <Nav open={open} />
    </header>
  );
};

export default SiteHeader;
