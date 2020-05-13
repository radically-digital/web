const path = require("path")

require("dotenv").config({
  path: ".env",
})

const website = require("./config/website")

const DEVELOPMENT = process.env.NODE_ENV === "development"

module.exports = {
  pathPrefix: "/assets",
  siteMetadata: {
    title: website.defaultTitle,
    description: website.defaultDescription,
    urlMain: "https://radically.digital",
    urlTransitioning:
      process.env.OVERWRITE_URL_TRANSITIONING ||
      "https://insights.radically.digital",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        defaultLang: "en-gb",
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        formatter: require("eslint-formatter-friendly"),
        cache: DEVELOPMENT,
        configFile: path.resolve(__dirname, ".eslintrc"),
      },
    },
    "gatsby-plugin-linaria",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
