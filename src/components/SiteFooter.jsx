import React from 'react';

import SocialLinks from './SocialLinks';
import Copyrights from './Copyrights';

const SiteFooter = () => (
  <header className="site-footer">
    <div className="site-footer__container">
      <SocialLinks/>

      <Copyrights/>
    </div>
  </header>
);

export default SiteFooter;
