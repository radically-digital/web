import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const BlogPost = ({ data }) => {
  const {
    data: postData,
    first_publication_date: date
  } = data.prismicPost;
  const title = postData.title.text;
  const content = postData.content.html;

  return (
    <Layout
      title="Radically Digital - Blog"
      description="Find out more about Blog at Radically Digital"
    >
      <section>
        <h2>{title}</h2>
        <h6>{date}</h6>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </Layout>
  )
};

export const pageQuery = graphql`
  query PostById($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date(formatString: "DD MM YYYY")
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;

export default BlogPost;
