import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
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

  return (
    <Layout title={title} description={description}>
      <section>
        <PostContainer>
          <Meta>
            <MetaContent>{category}</MetaContent>
          </Meta>
          <Title>{title}</Title>
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
    description,
    author_tag,
    timestamp,
    hero_image,
    hero_imageSharp,
  } = data.prismic.insight

  return {
    category: category_tag.category_tag,
    title,
    description,
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
