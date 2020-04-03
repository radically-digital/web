import React from 'react';
import QuoteForm from '../components/QuoteForm';

import Layout from '../components/Layout';

const Quote = () => (
  <Layout
    pageClass="join-us"
    title="Radically Digital - Join us"
    description="Careers at Radically Digital - come work with us!"
  >
    <section className="page-title">
      <div className="page-title__container">
        <QuoteForm />
      </div>
    </section>
  </Layout>
);

export default Quote;
