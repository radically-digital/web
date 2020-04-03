/* eslint-disable quotes */
import React from 'react';
import QuoteForm from '../components/QuoteForm';

import Layout from '../components/Layout';

const questions = [
  {
    question: "What's your name?",
    type: 'text',
  },
  {
    question: 'Which City are you looking in?',
    type: 'checkbox',
    option: ['London', 'New York'],
  },
];

const Quote = () => (
  <Layout title="Radically Digital - Quote" description="Get a Quote">
    <section className="page-title">
      <div className="page-title__container">
        <h1 className="page-title__heading">Quote</h1>
        <QuoteForm questions={questions}/>
      </div>
    </section>
  </Layout>
);

export default Quote;
