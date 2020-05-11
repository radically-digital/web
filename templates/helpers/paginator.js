exports.paginator = ({
  totalCount,
  postsPerPage,
  path,
  template,
  createPage,
}) => {
  const numPages = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1
    const skipPosts = postsPerPage * currentPage

    createPage({
      path: i === 0 ? `/${path}` : `/${path}/${currentPage}`,
      component: template,
      context: {
        limit: postsPerPage,
        skip: skipPosts,
        numPages,
        currentPage,
      },
    })
  })
}
