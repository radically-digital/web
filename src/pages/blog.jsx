import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

const Blog = ({ data: { allPrismicPost } }) => {

  return (
    <Layout
      title="Radically Digital - Blog"
      description="Find out more about Blog at Radically Digital"
    >
      <h2>Blog</h2>
      <ul>
        {allPrismicPost.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <Link to={`/blog/${edge.node.uid}`}>
                {edge.node.data.title.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
};

export const pageQuery = graphql`
  query blogPageQuery {
    allPrismicPost {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`;

export default Blog;
