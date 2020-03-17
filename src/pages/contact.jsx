import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Contact = () => (
  <Layout
    pageClass="contact"
    title="Radically Digital - Contact us"
    description="Get in touch with the team at Radically Digital"
  >
    <Hero inverted={true}>
      <h1 className="hero__heading">Let's chat about your project</h1>
      <p className="hero__summary">Time to chat about your new project. Have a challenge for our team? Even better, get in touch for our radical services. Let’s get radical.</p>
      <p className="hero__summary">Drop us an email today and a member of our team will be in touch to find out more about your project or just come over for a little informal chat. We make the best tea!</p>
    </Hero>
  </Layout>
);

export default Contact;
