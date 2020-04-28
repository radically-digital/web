import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"

import { humanDate } from "../utils/human-date"
import Layout from "../components/Layout"
import RDLogo from "../assets/logos/lock-up_square-gradient.svg"

const PostCell = ({ title, uid, publishDate, thumbnailImage }) => (
  <li className="recent-articles__item">
    <div className="recent-articles__thumb">
      <img
        src={thumbnailImage.url || RDLogo}
        alt={thumbnailImage.alt}
        aria-hidden={!thumbnailImage.alt}
      />
    </div>
    <div className="recent-articles__content">
      <span className="recent-articles__date">Published {publishDate}</span>

      <h5 className="recent-articles__title">{title}</h5>

      <Link className="recent-articles__link" to={`/insights/${uid}`}>
        Read more
      </Link>
    </div>
  </li>
)

const Paginator = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/insights"
      : `/insights/${(currentPage - 1).toString()}`
  const nextPage = `/insights/${(currentPage + 1).toString()}`

  return (
    <div className="article-pagination">
      <ul className="article-pagination__list">
        {!isFirst && (
          <li className="article-pagination__item article-pagination__item--prev">
            <Link to={prevPage} rel="prev" className="button button--primary">
              ← Previous Page
            </Link>
          </li>
        )}
        {!isLast && (
          <li className="article-pagination__item article-pagination__item--next">
            <Link to={nextPage} rel="next" className="button button--primary">
              Next Page →
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

const Posts = ({ data, pageContext }) => {
  const { posts } = xformer(data)

  return (
    <Layout
      pageClass="blog"
      title="Radically Digital - Insights"
      description="Radically Digital Insights"
    >
      <section className="page-title">
        <div className="page-title__container">
          <h1 className="page-title__heading">Insights</h1>
          <p className="page-title__summary">
            We love talking about tech, building tech and even writing about
            tech. Check out our insights below!
          </p>
        </div>
      </section>

      <section className="recent-articles">
        <div className="recent-articles__container">
          <h3 className="recent-articles__heading">Recent Insights</h3>
          <ul className="recent-articles__list">
            {posts.map((post) => (
              <PostCell key={post.title} {...post} />
            ))}
          </ul>
        </div>

        <Paginator pageContext={pageContext} />
      </section>
    </Layout>
  )
}

const xformer = (data) => ({
  posts: data.prismic.allPosts.edges.map(({ node }) => ({
    title: RichText.asText(node.title),
    uid: node._meta.uid,
    publishDate: humanDate(node._meta.firstPublicationDate),
    thumbnailImage: node.thumbnail_image,
  })),
})

export const pageQuery = graphql`
  query blogPageQuery($limit: Int, $skip: Int) {
    prismic {
      allPosts(
        sortBy: meta_firstPublicationDate_DESC
        first: $skip
        last: $limit
      ) {
        edges {
          node {
            title
            author
            thumbnail_image
            _meta {
              lastPublicationDate
              firstPublicationDate
              id
              uid
            }
          }
        }
      }
    }
  }
`

export default Posts
