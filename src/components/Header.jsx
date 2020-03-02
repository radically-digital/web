import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <h1>
      <Link to="/">
        Radically Digital
      </Link>
    </h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/join-us">Join us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
