import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        urlMain
        urlTransitioning
      }
    }
  }
`

const Nav = ({ open }) => {
  const {
    site: {
      siteMetadata: { urlMain },
    },
  } = useStaticQuery(query)

  return (
    <nav className="site-nav" open={open}>
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <a className="site-nav__link" href={`${urlMain}/`}>
            Home
          </a>
        </li>
        <li className="site-nav__item">
          <a className="site-nav__link" href={`${urlMain}/about-us`}>
            About us
          </a>
        </li>
        <li className="site-nav__item">
          <a className="site-nav__link" href={`${urlMain}/services`}>
            Services
          </a>
        </li>
        <li className="site-nav__item">
          <a className="site-nav__link" href={`${urlMain}/join-us`}>
            Join us
          </a>
        </li>
        <li className="site-nav__item">
          <Link className="site-nav__link" to="/insights">
            Insights
          </Link>
        </li>
        <li className="site-nav__item">
          <Link className="site-nav__link" to="/quote">
            Quote
          </Link>
        </li>
        <li className="site-nav__item site-nav__item--contact">
          <a className="button button--primary" href={`${urlMain}/contact-us`}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
