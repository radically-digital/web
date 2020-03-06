const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostQuery = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  if (blogPostQuery.error) {
    reporter.panicOnBuild('Error while running GraphQL query:', blogPostQuery.error);
  }

  const blogPostTemplate = path.resolve('src/pages/blog-post.jsx');

  blogPostQuery.data.allPrismicPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: blogPostTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
