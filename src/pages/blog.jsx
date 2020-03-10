import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import PageDescription from '../components/PageDescription';

const Blog = ({ data: { allPrismicPost } }) => {

  return (
    <Layout
      pageClass="blog"
      title="Radically Digital - Blog"
      description="Find out more about Blog at Radically Digital"
    >
      <PageDescription
        heading="Blog"
        summary="We love talking about tech, building tech and even writing about tech. Check out our articles below!"
      />

      <ul>
        {allPrismicPost.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <Link to={`/blog/${edge.node.uid}`}>
                {edge.node.data.title.text}
              </Link> - { edge.node.data.date}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
};

export const pageQuery = graphql`
  query blogPageQuery {
    allPrismicPost(
      limit: 3
      sort: {
        fields: [data___date]
        order: ASC
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
            date
          }
        }
      }
    }
  }
`;

export default Blog;
