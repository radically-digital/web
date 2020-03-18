import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import RDLogo from '../assets/logos/lock-up_square-gradient.svg';

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
                const { node, node: { data: { thumbnail_image } } } = edge;
                const image_url = thumbnail_image.url ? thumbnail_image.url : RDLogo;
                const alt_text = !thumbnail_image.url ? 'RD logo' : !thumbnail_image.alt ? 'Post thumbnail' : thumbnail_image.alt;

                return (
                  <li className="recent-articles__item" key={node.id}>
                    <div className="recent-articles__thumb">
                      <img src={image_url} alt={alt_text}/>
                    </div>
                    <div className="recent-articles__content">
                      <span className="recent-articles__date">{node.first_publication_date}</span>

                      <h5 className="recent-articles__title">{node.data.title.text}</h5>

                      <Link className="recent-articles__link" to={`/blog/${node.uid}`}>Read more</Link>
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
        fields: [first_publication_date]
        order: DESC
      }
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

export default Blog;
