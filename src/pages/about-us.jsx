import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PageDescription from '../components/PageDescription';

const AboutUs = () => (
  <Layout
    pageClass="about-us"
    title="Radically Digital - About Us"
    description="About Radically Digital the Digital Consultancy for the modern age"
  >
    <Hero inverted={true}>
      <h1 className="hero__heading">We're Radically Digital</h1>
      <p className="hero__summary">An innovative collective of like-minded folks making useful and enduring technology products</p>
    </Hero>

    <PageDescription
      heading="What drives us"
      summary="As a people first company, our people are our biggest passion. We firmly believe the happiest people build the best products. That's why we take extra care to ensure all our consultants truly live and breathe our 3 core values..."
    />
  </Layout>
);

export default AboutUs;
