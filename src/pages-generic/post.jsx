import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import { RichText } from "prismic-reactjs"
import { humanDate } from "../utils/human-date"

const Post = ({ data }) => {
  const { publishDate, title, content, contentTextOnly } = xformer(data)

  return (
    <Layout
      pageClass="blog-post"
      title={`${title} | Radically Digital`}
      description={contentTextOnly}
    >
      <section className="blog-post">
        <div className="blog-post__container">
          <h1 className="blog-post__heading">{title}</h1>

          <div className="blog-post__meta">
            <p className="blog-post__date">Published on the {publishDate}</p>
          </div>

          <article className="blog-post__content">
            <RichText render={content} />
          </article>
        </div>
      </section>
    </Layout>
  )
}

const xformer = (data) => ({
  publishDate: humanDate(data.prismic.post._meta.firstPublicationDate),
  title: RichText.asText(data.prismic.post.title),
  contentTextOnly: RichText.asText(data.prismic.post.content),
  content: data.prismic.post.content,
})

export const pageQuery = graphql`
  query PostById($uid: String!) {
    prismic {
      post(uid: $uid, lang: "en-gb") {
        title
        content
        _meta {
          lastPublicationDate
          firstPublicationDate
        }
        _linkType
        author
      }
    }
  }
`

export default Post
