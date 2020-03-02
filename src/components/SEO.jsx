import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

const query =
  graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);

  const defaultTitle = title || site.siteMetadata.title;
  const defaultDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={defaultTitle}
      meta={[
        {
          name: 'description',
          content: defaultDescription,
        }
      ]}
    >
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css" />
    </Helmet>
  );
};

export default SEO;
