/* eslint-disable quotes */
import React from 'react';
import QuoteForm from '../components/QuoteForm';

import Layout from '../components/Layout';

const questions = [
  {
    type: 'button',
    options: ['Yes'],
    question:
      'In under 60 seconds and just a few Qs, you can help us understand your challenge. Sound good?',
  },
  {
    question: 'What is your industry?',
    type: 'checkbox',
    options: [
      'Retail',
      'Financial Services',
      'Technology, Healthcare',
      'Energy/Utilities',
      'Mining',
      'Food/Drinks',
      'Automotive',
      'Real Estate',
      'Manufacturing',
      'Education',
      'Tourism',
      'Media',
    ],
  },
  {
    type: 'button',
    question:
      'What challenge can we help with? Feel free to select multiple options from the selection below ',
  },
  { type: 'button', question: 'Any Specific Project Goals? ' },
  {
    type: 'button',
    question: `e.g. Building a new product\nStream line operations\nAgile Coaching\netc`,
  },
  {
    type: 'button',
    question: 'That all sounds great! How soon are you looking to start?',
  },
  {
    type: 'text',
    question:
      'Excellent a [dependent on answer selection in Q2] coming your way. Enter your email address and we will send your options over! ',
  },
];

const Quote = () => (
  <Layout title="Radically Digital - Quote" description="Get a Quote">
    <section className="page-title">
      <div className="page-title__container">
        <h1 className="page-title__heading">Quote</h1>
        <QuoteForm questions={questions} />
      </div>
    </section>
  </Layout>
);

export default Quote;
