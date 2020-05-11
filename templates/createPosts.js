const path = require("path")
const { postsPerPage } = require("./config/website")

exports.createPosts = ({ createPage }) => (result) => {
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
