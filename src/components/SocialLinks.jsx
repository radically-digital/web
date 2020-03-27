import React from 'react';

import Icon from './Icon';

const SocialLinks = () => (
  <nav className="social-links">
    <h5 className="social-links__heading">Join our community</h5>
    <ul className="social-links__list">
      <li className="social-links__item">
        <a
          className="social-links__link"
          href="https://www.linkedin.com/company/radically-digital"
        >
          <Icon name="linkedin" />
        </a>
      </li>
      <li className="social-links__item">
        <a
          className="social-links__link"
          href="https://www.instagram.com/radicallydigital"
        >
          <Icon name="instagram" />
        </a>
      </li>
      <li className="social-links__item">
        <a
          className="social-links__link"
          href="https://www.facebook.com/radically-digital"
        >
          <Icon name="facebook" />
        </a>
      </li>
    </ul>
  </nav>
);

export default SocialLinks;
