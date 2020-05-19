const fs = require("fs")
const dir = "./.cache/caches/gatsby-source-prismic-graphql"
const { createInsights } = require("./templates/createInsights")
const { createPosts } = require("./templates/createPosts")
const { createCaseStudies } = require("./templates/createCaseStudies")

/* Fix for gatsby-source-prismic-graphql bug related to imageSharp
https://github.com/birkir/gatsby-source-prismic-graphql/issues/162 */
exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

const resultCheck = ({ reporter }) => (result) => {
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query:", result.errors)
  }

  return result
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        prismic {
          allPosts {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
            totalCount
          }
          allInsights {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
            totalCount
          }
          allCase_studys {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
            totalCount
          }
        }
      }
    `
  )
    .then(resultCheck({ reporter }))
    .then((result) =>
      Promise.all([
        createPosts({ createPage })(result),
        createInsights({ createPage })(result),
        createCaseStudies({ createPage })(result),
      ])
    )
}
