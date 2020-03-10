import React from 'react';

const classNames = require('classnames');

import SEO from './SEO';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const Layout = ({ children, title, description, ...props }) => {
  const { pageClass } = props;
  const pageClasses = classNames('page', {
    [`page-${pageClass}`]: pageClass,
  });

  return (
    <div className="site-wrapper">
      <SEO
        title={title}
        description={description}
      />

      <SiteHeader />

      <main className="page-wrapper">
        <div className={pageClasses}>
          {children}
        </div>
      </main>

      <SiteFooter/>
    </div>
  )
};

export default Layout;
