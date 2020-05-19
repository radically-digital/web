const path = require("path")

exports.createCaseStudies = ({ createPage }) => (result) => {
  const postTemplate = path.resolve("src/pages-generic/case-study.jsx")
  const posts = result.data.prismic.allCase_studys.edges

  posts.forEach((case_study) => {
    const uid = case_study.node._meta.uid

    createPage({
      path: `/case-studies/${uid}`,
      component: postTemplate,
      context: {
        uid,
      },
    })
  })
}
