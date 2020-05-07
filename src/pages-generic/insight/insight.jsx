import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { RichText } from "prismic-reactjs"
import { timeAgo } from "../../utils/human-date"
import Img from "gatsby-image"
import { styledComponents } from "./styledComponents"

const {
  PostContainer,
  HeroImageContainer,
  Meta,
  MetaContent,
  SpanSpacing,
  Title,
} = styledComponents

const Insight = ({ data }) => {
  const {
    publishDate,
    title,
    description,
    category,
    author,
    heroImage,
    heroImageAlt,
  } = xformer(data)

  const titlePlainText = RichText.asText(title)

  return (
    <Layout
      pageClass="blog-post"
      title={titlePlainText}
      description={description}
    >
      <section>
        <PostContainer>
          <Meta>
            <MetaContent>{category}</MetaContent>
          </Meta>
          <Title>{titlePlainText}</Title>
          <Meta>
            <MetaContent>
              {publishDate}
              <SpanSpacing>•</SpanSpacing>
              {author}
            </MetaContent>
          </Meta>
          <HeroImageContainer>
            <Img fluid={heroImage} alt={heroImageAlt} />
          </HeroImageContainer>
        </PostContainer>
      </section>
    </Layout>
  )
}

const xformer = (data) => {
  const {
    category_tag,
    title,
    author_tag,
    timestamp,
    hero_image,
    hero_imageSharp,
  } = data.prismic.insight

  return {
    category: category_tag.category_tag,
    title: title,
    author: author_tag.author_tag,
    publishDate: timeAgo(timestamp),
    heroImageAlt: hero_image.alt,
    heroImage: hero_imageSharp.childImageSharp.fluid,
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
        title
        description
        timestamp
        hero_image
        hero_imageSharp {
          childImageSharp {
            fluid(quality: 100) {
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
