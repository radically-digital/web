import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const BlogPost = ({ data }) => {
  const {
    data: postData,
    first_publication_date: date,
  } = data.prismicPost;
  const title = postData.title.text;
  const content = postData.content.html;

  return (
    <Layout
      pageClass="blog-post"
      title="Radically Digital - Blog"
      description="Find out more about Blog at Radically Digital"
    >
      <section className="blog-post">
        <div className="blog-post__meta">
          <div className="blog-post__container">
            <h1 className="blog-post__heading">{title}</h1>
            <p className="blog-post__date">Published: {date}</p>
          </div>
        </div>
        <article className="blog-post__content" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </Layout>
  )
};

export const pageQuery = graphql`
  query PostById($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date(formatString: "MMMM Do YYYY")
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
