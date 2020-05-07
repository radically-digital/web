const path = require("path")

const { postsPerPage } = require("./config/website")

const createInsights = ({ createPage }) => (result) => {
  const insightTemplate = path.resolve("src/pages-generic/insight/insight.jsx")
  const insights = result.data.prismic.allInsights.edges

  insights.forEach((insight) => {
    const uid = insight.node._meta.uid

    createPage({
      path: `/insights/${uid}`,
      component: insightTemplate,
      context: {
        uid,
      },
    })
  })
}

const createPosts = ({ createPage }) => (result) => {
  const postTemplate = path.resolve("src/pages-generic/post.jsx")
  const postsTemplate = path.resolve("src/pages-generic/posts.jsx")

  const posts = result.data.prismic.allPosts.edges
  const totalCount = result.data.prismic.allInsights.totalCount

  posts.forEach((post) => {
    const uid = post.node._meta.uid

    createPage({
      path: `/insights/${uid}`,
      component: postTemplate,
      context: {
        uid,
      },
    })
  })

  const numPages = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    const limit = postsPerPage
    const skip = i * postsPerPage
    const currentPage = i + 1

    createPage({
      path: i === 0 ? "/insights" : `/insights/${i + 1}`,
      component: postsTemplate,
      context: {
        limit,
        skip: limit - skip,
        numPages,
        currentPage,
      },
    })
  })
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
        }
      }
    `
  ).then(
    resultCheck({ reporter }).then((result) =>
      Promise.all([
        createPosts({ createPage })(result),
        createInsights({ createPage })(result),
      ])
    )
  )
}
