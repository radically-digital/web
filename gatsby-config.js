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
  ],
};
