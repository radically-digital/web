import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { timeAgo } from "../../utils/human-date"
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader"

import { styles } from "./styles"

const { PostContainer, ArticleBody, IntroParagraph } = styles

// const Sections = ({ data }) => {
//   console.log(data)

//   return null
// }

const Insight = ({ data }) => {
  const {
    publishDate,
    title,
    description,
    category,
    author,
    heroImage,
    heroImageAlt,
    introParagraph,
  } = xformer(data)

  return (
    <Layout title={title} description={description}>
      <PostContainer>
        <ArticleHeader
          publishDate={publishDate}
          title={title}
          category={category}
          author={author}
          heroImage={heroImage}
          heroImageAlt={heroImageAlt}
        />
        <ArticleBody>
          <IntroParagraph>{introParagraph}</IntroParagraph>
          {/* {Sections} */}
        </ArticleBody>
      </PostContainer>
    </Layout>
  )
}

const xformer = (data) => {
  const {
    category_tag,
    title,
    description,
    author_tag,
    timestamp,
    hero_image,
    hero_imageSharp,
    body,
  } = data.prismic.insight

  return {
    category: category_tag.category_tag,
    title,
    description,
    author: author_tag.author_tag,
    publishDate: timeAgo(timestamp),
    heroImageAlt: hero_image.alt,
    heroImage: hero_imageSharp.childImageSharp.fluid,
    introParagraph: body[0].primary.intro_paragraph,
  }
}

export const pageQuery = graphql`
  query InsightById($uid: String!) {
    prismic {
      insight(uid: $uid, lang: "en-gb") {
        category_tag {
          __typename
          ... on PRISMIC_Category_tag {
            category_tag
          }
        }
        author_tag {
          __typename
          ... on PRISMIC_Author_tag {
            author_tag
          }
        }
        body {
          __typename
          ... on PRISMIC_InsightBodyIntro_paragraph {
            type
            primary {
              intro_paragraph
            }
          }
        }
        title
        description
        timestamp
        hero_image
        hero_imageSharp {
          childImageSharp {
            fluid(maxWidth: 1290, maxHeight: 740) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        _meta {
          firstPublicationDate
          uid
        }
      }
    }
  }
`

export default Insight
