import React from 'react';

const PageDescription = ({ heading, summary}) => {
  return (
    <div className="page-description">
      <h1 className="page-description__heading">{heading}</h1>
      {summary ? <p className="page-description__summary">{summary}</p> : null}
    </div>
  )
};

export default PageDescription;
