import React, { useState, useEffect } from 'react';

const slides = [
  {
    name: 'Jordan B.',
    position: 'Product Owner - Insurance',
    testimony: 'The delivery lead steered the project from what was a very waterfall beginning to delivering new functionality to the business every sprint. He took his time changing the mind set of everyone involved in the project left behind a team who continue building on the success he embedded.',
    photo: 'testimonial-photo-1.jpg',
  },
  {
    name: 'Joseba E.',
    position: 'Product Owner - Publishing',
    testimony: 'The agile delivery consultant took ownership of his role from the first day that he joined, becoming a very key person not only from the delivery perspective but also an asset for changing the culture of the team. His knowledge, background and emotional intelligence helps him to bring all the team with him.',
    photo: 'testimonial-photo-2.jpg',
  },
];

const slideTime = 6000;

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const handleNext = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    const curr = (current - 1 + length) % length;
    setCurrent(curr);
  };

  useEffect(() => {
    const next = current === length -1 ? 0 : current + 1;
    const id = setTimeout(() => setCurrent(next), slideTime);

    return () => clearTimeout(id);
  }, [current]);

  return (
    <section className="testimonial-slider">
      <div className="testimonial-slider__container">
        <div className="testimonial-slider__inner">
          <ul className="testimonial-slider__slides">
            {slides.map((slide, i) => {
              const Image = () => {
                return (
                  <img src={require(`../assets/images/${slide.photo}`)} alt={slide.name} />
                )
              };

              return (
                <li
                  key={`slide-${i}`}
                  className={`testimonial-slider__slide ${i === current ? 'testimonial-slider__slide--active' : ''}`}
                  aria-hidden={i !== current}
                >
                  <div className="testimonial-slider__photo">
                    <Image/>
                  </div>
                  <div className="testimonial-slider__content">
                    <p className="testimonial-slider__testimony">&ldquo;{slide.testimony}&rdquo;</p>
                    <h5 className="testimonial-slider__name">{slide.name}</h5>
                    <span className="testimonial-slider__position">{slide.position}</span>
                  </div>
                </li>
              )
            })}
          </ul>

          <button className="testimonial-slider__button testimonial-slider__button--prev" onClick={handlePrev}>
            <i className="icon" />
          </button>

          <button className="testimonial-slider__button testimonial-slider__button--next" onClick={handleNext}>
            <i className="icon" />
          </button>
        </div>
      </div>
    </section>
  )
};

export default TestimonialSlider;
