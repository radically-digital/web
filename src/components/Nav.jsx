import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      urlMain
      urlTransitioning
    }
  }
`;

const Nav = ({ open }) => {
  const {
    site: { urlMain, urlTransitioning },
  } = useStaticQuery(query);

  return (
    <nav className="site-nav" open={open}>
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <Link className="site-nav__link" to={`${urlMain}/`}>
            Home
          </Link>
        </li>
        <li className="site-nav__item">
          <Link className="site-nav__link" to={`${urlMain}/about-us`}>
            About us
          </Link>
        </li>
        <li className="site-nav__item">
          <Link className="site-nav__link" to={`${urlMain}/services`}>
            Services
          </Link>
        </li>
        <li className="site-nav__item">
          <Link className="site-nav__link" to={`${urlMain}/join-us`}>
            Join us
          </Link>
        </li>
        <li className="site-nav__item">
          <Link className="site-nav__link" to={`${urlTransitioning}/insights`}>
            Insights
          </Link>
        </li>
        <li className="site-nav__item site-nav__item--contact">
          <Link className="button button--primary" to={`${urlMain}/contact`}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
