import React from 'react';

import Layout from '../components/Layout';
import PageDescription from '../components/PageDescription';

const IndexPage = () => (
  <Layout pageClass="home">
    <PageDescription
      heading="All the tools you'll need"
      summary="What are you building right now? Tell us today. From brochureware pages to completely reinventing your legacy system or why not, create a new digital journey your customers will just go crazy for, we’ve got your back 100%."
    />
  </Layout>
);

export default IndexPage;
