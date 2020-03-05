require('dotenv').config({
  path: '.env',
});

const website = require('./config/website');

module.exports = {
  /* General Information */
  siteMetadata: {
    title: website.defaultTitle,
    description: website.defaultDescription,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
  ],
};
