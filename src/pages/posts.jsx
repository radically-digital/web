import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import RDLogo from '../assets/logos/lock-up_square-gradient.svg';

const Posts = props => {
  const posts = props.data.allPrismicPost;
  const { currentPage, numPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? '/insights'
      : `/insights/${(currentPage - 1).toString()}`;
  const nextPage = `/insights/${(currentPage + 1).toString()}`;

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
            {posts.edges.map(post => {
              const {
                node,
                node: {
                  data: { thumbnail_image },
                },
              } = post;
              const image_url = thumbnail_image.url
                ? thumbnail_image.url
                : RDLogo;
              const alt_text = !thumbnail_image.url
                ? 'Radically Digital logo'
                : !thumbnail_image.alt
                ? 'Post thumbnail'
                : thumbnail_image.alt;

              return (
                <li className="recent-articles__item" key={node.id}>
                  <div className="recent-articles__thumb">
                    <img src={image_url} alt={alt_text} />
                  </div>
                  <div className="recent-articles__content">
                    <span className="recent-articles__date">
                      {node.first_publication_date}
                    </span>

                    <h5 className="recent-articles__title">
                      {node.data.title.text}
                    </h5>

                    <Link
                      className="recent-articles__link"
                      to={`/insights/${node.uid}`}
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="article-pagination">
          <ul className="article-pagination__list">
            {!isFirst && (
              <li className="article-pagination__item article-pagination__item--prev">
                <Link
                  to={prevPage}
                  rel="prev"
                  className="button button--primary"
                >
                  ← Previous Page
                </Link>
              </li>
            )}
            {!isLast && (
              <li className="article-pagination__item article-pagination__item--next">
                <Link
                  to={nextPage}
                  rel="next"
                  className="button button--primary"
                >
                  Next Page →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int, $limit: Int) {
    allPrismicPost(
      limit: $limit
      skip: $skip
      sort: { fields: [first_publication_date], order: DESC }
    ) {
      edges {
        node {
          id
          uid
          first_publication_date(formatString: "MMMM Do YYYY")
          data {
            title {
              text
            }
            thumbnail_image {
              url
              alt
            }
          }
        }
      }
    }
  }
`;

export default Posts;
