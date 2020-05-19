const path = require("path")
const { postsPerPage } = require("../config/website")
const { paginator } = require("./helpers/paginator")

exports.createPosts = ({ createPage }) => (result) => {
  const postTemplate = path.resolve("src/pages-generic/post.jsx")
  const postsTemplate = path.resolve("src/pages-generic/posts.jsx")

  const posts = result.data.prismic.allPosts.edges
  const totalCount = result.data.prismic.allPosts.totalCount

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

  paginator({
    totalCount,
    postsPerPage,
    path: "insights",
    template: postsTemplate,
    createPage,
  })
}
