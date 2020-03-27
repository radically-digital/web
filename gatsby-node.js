const path = require('path');

const { postsPerPage } = require('./config/website');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/pages/post.jsx');
  const postsTemplate = path.resolve('src/pages/posts.jsx');

  return graphql(
    `
      {
        allPrismicPost {
          totalCount
          edges {
            node {
              uid
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(
        'Error while running GraphQL query:',
        result.errors
      );
    }

    // Create inights posts pages
    const posts = result.data.allPrismicPost.edges;
    const totalCount = result.data.allPrismicPost.totalCount;

    posts.forEach(post => {
      createPage({
        path: `/insights/${post.node.uid}`,
        component: postTemplate,
        context: {
          uid: post.node.uid,
        },
      });
    });

    // Create inights post list pages
    const numPages = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      const limit = postsPerPage;
      const skip = i * postsPerPage;
      const currentPage = i + 1;

      createPage({
        path: i === 0 ? '/insights/' : `/insights/${i + 1}`,
        component: postsTemplate,
        context: {
          limit,
          skip,
          numPages,
          currentPage,
        },
      });
    });
  });
};
