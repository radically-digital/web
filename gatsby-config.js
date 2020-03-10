const path = require('path');

require('dotenv').config({
  path: '.env',
});

const website = require('./config/website');

const DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  pathPrefix: '/web',
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
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        formatter: require('eslint-formatter-friendly'),
        cache: DEVELOPMENT,
        configFile: path.resolve(__dirname, '.eslintrc'),
      }
    }
  ],
};
