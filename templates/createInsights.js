const path = require("path")

exports.createInsights = ({ createPage }) => (result) => {
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
