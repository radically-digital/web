import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { timeAgo } from "../../utils/human-date"
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader"
import ArticleSections from "../../components/ArticleSections/ArticleSections"

import { styles } from "./styles"

const { HeaderContainer } = styles

const Insight = ({ data }) => {
  const {
    publishDate,
    title,
    description,
    category,
    author,
    heroImage,
    heroImageAlt,
    body,
  } = xformer(data)

  return (
    <Layout title={title} description={description}>
      <article>
        <HeaderContainer>
          <ArticleHeader
            publishDate={publishDate}
            title={title}
            category={category}
            author={author}
            heroImage={heroImage}
            heroImageAlt={heroImageAlt}
          />
        </HeaderContainer>
        <ArticleSections sections={body} />
      </article>
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
    publishDate: timeAgo(timestamp.slice(0, 10)),
    heroImageAlt: hero_image.alt,
    heroImage: hero_imageSharp.childImageSharp.fluid,
    body,
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
          ... on PRISMIC_InsightBodyText_section {
            type
            primary {
              text_section
            }
          }
          ... on PRISMIC_InsightBodyHeading {
            type
            primary {
              paragraph_heading
            }
          }
          ... on PRISMIC_InsightBodyImage {
            type
            primary {
              image
              imageSharp {
                childImageSharp {
                  fluid(maxWidth: 1980, maxHeight: 1080) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image_caption
              full_width
            }
          }
        }
        title
        description
        timestamp
        hero_image
        hero_imageSharp {
          childImageSharp {
            fluid(maxWidth: 1980, maxHeight: 1080) {
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
