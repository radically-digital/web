import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { makeBlurb } from '../utils/makeBlurb';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = ({
  title,
  description,
  metadataDescription,
  metadataTitle,
  altTitle,
}) => {
  const { site } = useStaticQuery(query);
  const blurb =
    description && typeof description === 'string'
      ? makeBlurb(description)
      : description;
  const defaultTitle = title || site.siteMetadata.title;
  const defaultDescription = blurb || site.siteMetadata.description;

  return (
    <Helmet>
      <title>{altTitle || defaultTitle}</title>
      <meta
        name="description"
        content={metadataDescription || defaultDescription}
      />
      <meta
        property="og:title"
        content={metadataTitle || altTitle || defaultTitle}
      />
      <meta
        property="og:description"
        content={metadataDescription || defaultDescription}
      />
      {/* <meta property="og:image" content={heroImage} />
    <meta name="twitter:card" content={heroImage} /> */}

      <meta
        name="twitter:image:alt"
        content={metadataTitle || altTitle || defaultTitle}
      />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired, // can be html or string

  metadataTitle: PropTypes.string,
  metadataDescription: PropTypes.string,
  altTitle: PropTypes.string, // override the page title
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default SEO;
