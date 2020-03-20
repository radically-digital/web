import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import ClientImage1 from '../assets/images/client-image-1.jpg';
import ClientImage2 from '../assets/images/client-image-2.jpg';
import ClientImage3 from '../assets/images/client-image-3.jpg';
import ClientImage4 from '../assets/images/client-image-4.jpg';
import ClientImage5 from '../assets/images/client-image-5.jpg';
import ClientImage6 from '../assets/images/client-image-6.jpg';
import ProcessImage from '../assets/images/coworking-room.jpg';
import TestimonialSlider from '../components/TestimonialSlider';

const IndexPage = () => (
  <Layout pageClass="home">
    <section className="page-title page-title--home">
      <div className="page-title__container">
        <h1 className="page-title__heading">All the tools you'll need</h1>
        <p className="page-title__summary">What are you building right now? Tell us today. From brochureware pages to completely reinventing your legacy system or why not, create a new digital journey your customers will just go crazy for, we’ve got your back 100%.</p>
      </div>
    </section>

    <section className="process">
      <div className="process__container">
        <div className="process__image-container">
          <img src={ProcessImage} alt="room with desks, chairs and two whiteboards"/>
          <p>Interested? <Link to="/contact-us">Call us now!</Link></p>
        </div>
        <div className="process__content">
          <ul className="process__list">
            <li className="process__item">
              <div className="process__number">
                <span>1</span>
              </div>
              <div className="process__body">
                <h4 className="process__heading"><Link to="/about-us">Spark</Link></h4>
                <p>Initiate your product discovery with a team of our industry experts.</p>
              </div>
            </li>
            <li className="process__item">
              <div className="process__number">
                <span>2</span>
              </div>
              <div className="process__body">
                <h4 className="process__heading"><Link to="/about-us">Build</Link></h4>
                <p>Meet your very own software engineers and analysts. See them build the platform of your dreams.</p>
                <p>Test and share your thoughts, we thrive on feedback.</p>
              </div>
            </li>
            <li className="process__item">
              <div className="process__number">
                <span>3</span>
              </div>
              <div className="process__body">
                <h4 className="process__heading"><Link to="/about-us">Care</Link></h4>
                <p>Find out more about our bespoke, post-project packages. Pick the one you like the most. Time to relax, your business is in good hands.</p>
                {/*<h4<Link to="/about-us">Care</Link></h4>*/}
                {/*<p>Find out more about our bespoke, post-project packages. Pick the one you like the most. Time to relax, your business is in good hands.</p>*/}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="features-small">
      <h2 className="section-title">We Work With Radical Clients</h2>
      <ul className="features-small__list">
        <li className="features-small__item">
          <img src={ClientImage1} alt="Just Eat logo" className="features-small__image" />
          <h4 className="features-small__heading">Just Eat</h4>
          <p className="features-small__description">Leading agile delivery in restaurants team</p>
        </li>
        <li className="features-small__item">
          <img src={ClientImage2} alt="Wind farm" className="features-small__image" />
          <h4 className="features-small__heading">Big Six Energy Supplier</h4>
          <p className="features-small__description">Here's how our consultant helped drive best practice in development</p>
        </li>
        <li className="features-small__item">
          <img src={ClientImage3} alt="OVO Energy logo" className="features-small__image" />
          <h4 className="features-small__heading">OVO Energy</h4>
          <p className="features-small__description">Here's how our consultant helped towards a more stable development workflow</p>
        </li>
        <li className="features-small__item">
          <img src={ClientImage4} alt="Car in front of a cottage house" className="features-small__image" />
          <h4 className="features-small__heading">Home & Motor Insurance Company</h4>
          <p className="features-small__description">Here's how our consultant reduced the time to process motor claims by 35%</p>
        </li>
        <li className="features-small__item">
          <img src={ClientImage5} alt="Computer screen with illuminated keyboard" className="features-small__image" />
          <h4 className="features-small__heading">TV, Telecoms & Broadband Company</h4>
          <p className="features-small__description">Our consultant slashed the time to release changes by 3 weeks</p>
        </li>
        <li className="features-small__item">
          <img src={ClientImage6} alt="Warehouse shelves with boxes and items" className="features-small__image" />
          <h4 className="features-small__heading">UK Online Wholesale & Cash and Carry Giant</h4>
          <p className="features-small__description">Here's how our consultant improved customer satisfaction in a B2B company</p>
        </li>
      </ul>
    </section>

    <TestimonialSlider/>
  </Layout>
);

export default IndexPage;
