import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

const Blog = ({ data: { allPrismicPost } }) => {

  return (
    <Layout
      pageClass="blog"
      title="Radically Digital - Blog"
      description="Find out more about Blog at Radically Digital"
    >
      <section className="page-title">
        <div className="page-title__container">
          <h1 className="page-title__heading">Blog</h1>
          <p className="page-title__summary">We love talking about tech, building tech and even writing about tech. Check out our articles below!</p>
        </div>
      </section>

      <section className="recent-articles">
        <div className="recent-articles__container">
          <h3 className="recent-articles__heading">Recent Articles</h3>
          <ul className="recent-articles__list">
            {
              allPrismicPost.edges.map((edge) => {
                return (
                  <li className="recent-articles__item" key={edge.node.id}>
                    <div className="recent-articles__thumb">
                      <img src={edge.node.data.thumbnail_image.url} alt=""/>
                    </div>
                    <div className="recent-articles__content">
                      <span className="recent-articles__date">{edge.node.data.date}</span>

                      <h5 className="recent-articles__title">{edge.node.data.title.text}</h5>

                      <Link className="recent-articles__link" to={`/blog/${edge.node.uid}`}>Read more</Link>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </Layout>
  )
};

export const pageQuery = graphql`
  query blogPageQuery {
    allPrismicPost(
      limit: 3
      sort: {
        fields: [data___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            date(formatString: "MMMM DD YYYY")
            thumbnail_image {
              url
            }
          }
        }
      }
    }
  }
`;

export default Blog;
