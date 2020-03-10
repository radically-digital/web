import React from 'react';

const classNames = require('classnames');

const Hero = ({ children, ...props }) => {
  const { inverted } = props;
  const classnames = classNames('hero', {
    'hero--inverted': inverted,
  });

  return (
    <div className={classnames}>
      {children}
    </div>
  )
};

export default Hero;
