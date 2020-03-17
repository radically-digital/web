import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import FeatureImage3 from '../assets/images/feature-image-3.jpg';

const AboutUs = () => (
  <Layout
    pageClass="about-us"
    title="Radically Digital - About Us"
    description="About Radically Digital the Digital Consultancy for the modern age"
  >
    <section className="page-title page-title--secondary">
      <div className="page-title__container">
        <h2 className="page-title__heading">What drives us</h2>
        <p className="page-title__summary">As a people first company, our people are our biggest passion. We firmly believe the happiest people build the best products. That's why we take extra care to ensure all our consultants truly live and breathe our <strong>3 core values</strong>...</p>
      </div>
    </section>

    <section className="text-layout">
      <div className="text-layout__container">
        <ul className="text-layout__list">
          <li className="text-layout__item">
            <h4 className="text-layout__heading">Inclusion</h4>
            <p className="text-layout__description">Play as a team, win as a team. Whether it's in our recruiting, our work with other Radicals or our collaboration with our clients, we believe inclusion is a fundamental key to success!</p>
          </li>
          <li className="text-layout__item">
            <h4 className="text-layout__heading">Ingenuity</h4>
            <p className="text-layout__description">We're all about creative problem solving. We encourage taking the mundane and making it Radical by creating new, exciting and better ways of solving our client's challenges</p>
          </li>
          <li className="text-layout__item">
            <h4 className="text-layout__heading">Curiosity</h4>
            <p className="text-layout__description">Radically Digital was born from a search for a new way to solve the digital skills gap. We bake that curiosity and hunger for learning into everything we do</p>
          </li>
        </ul>
      </div>
    </section>

    <section className="features-large">
      <div className="features-large__image">
        <img src={FeatureImage3} alt="Outdoor barbeque with smoke"/>
      </div>
      <div className="features-large__content">
        <h2 className="features-large__heading">How did it all start?</h2>
        <p>Have you ever had one of those beautiful summer evenings when the weather is just perfect and the bbq is on fire? (literally, it did almost catch fire but that’s another story). You look across the room, your eyes meet those of your best mate, and the spark, oh boy, the spark is just palpable. You hug each other while your missus gently hands over glasses of water and you just softly whisper those magic words: “We should launch a digital business”.</p>
        <p>This is kind of how it happened, truth is we just wanted to build better digital solutions and we wanted it to do it together. So we combined our collective expertise with consulting, finance and technology and took a leap of faith. Flash forward to the future, we are now a Deloitte meets Google, young consultancy which believes in creating practical digital solutions for their customers; and still meet for a bbq and a pint or two on a regular basis.</p>
        <p><strong>Described as Deloitte meets Google, Radically Digital reimagines the very idea of consulting in the modern age. </strong></p>
      </div>
    </section>

    <section className="cta">
      <h2 className="cta__heading">We're always looking for talent</h2>
      <div className="cta__content">
        <p>Got what it takes to work with us? Great! Send us a link to your resumé or portfolio to become part of our talent pool.</p>
        <p>
          <Link to="/join-us" className="button button--primary button--short">See job openings</Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default AboutUs;
