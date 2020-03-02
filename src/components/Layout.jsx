import React from 'react';

import Header from './Header';
import SEO from './SEO';

const Layout = ({ children, title, description }) => (
  <>
    <SEO
      title={title}
      description={description}
    />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
