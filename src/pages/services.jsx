import React from 'react';

import Layout from '../components/Layout';
import PageDescription from '../components/PageDescription';

const Services = () => (
  <Layout
    pageClass="services"
    title="Radically Digital - Services"
    description="Radically Digital case studies and services we offer"
  >
    <PageDescription
      heading="Full-service Agile Design & Development"
      summary="From a team of passionate creators working side-by-side with our partners to deliver engaging digital and physical campaigns."
    />
  </Layout>
);

export default Services;
