import React from "react"
import { graphql } from "gatsby"
import { styled } from "linaria/react"
import Layout from "../components/Layout"
import { RichText } from "prismic-reactjs"
import { humanDate } from "../utils/human-date"

const PostContainer = styled.div`
  font-family: Poppins;
  margin: 0 auto;
  padding: 2.7rem 4.7rem;
  @media screen and (min-width: 640px) {
    padding: 5.2rem 0;
    width: 80%;
  }
`

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0rem;
`

const Meta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MetaContent = styled.p`
  margin: 1rem 0rem;
  font-size: 1.3rem;
  & > * {
    margin: 0.3rem;
    font-size: 1.3rem;
  }
`

const HeroImage = styled.img`
  margin: 10rem 0rem;
  width: 100%;
`

const Insight = ({ data }) => {
  const { publishDate, title, category, author, heroImage } = xformer(data)
  const { alt, url } = heroImage

  return (
    <Layout pageClass="blog-post" title={title} description={"Placeholder"}>
      <section>
        <PostContainer>
          <Meta>
            <MetaContent>{category}</MetaContent>
          </Meta>
          <Title>{title}</Title>

          <Meta>
            <MetaContent>
              <span>{publishDate}</span>
              <span>•</span>
              <span>{author}</span>
            </MetaContent>
          </Meta>
          <HeroImage src={url} alt={alt} />
        </PostContainer>
      </section>
    </Layout>
  )
}

const xformer = (data) => {
  const header = data.prismic.insight.body.find(
    (x) => x.type === "insight_header"
  )
  return {
    category: header.primary.category_tag.category_tag,
    title: RichText.asText(header.primary.title),
    author: header.primary.author_tag.author_tag,
    publishDate: humanDate(header.primary.timestamp),
    heroImage: header.primary.hero_image,
  }
}

export const pageQuery = graphql`
  query InsightById($uid: String!) {
    prismic {
      insight(uid: $uid, lang: "en-gb") {
        body {
          ... on PRISMIC_InsightBodyInsight_header {
            type
            primary {
              category_tag {
                __typename
                ... on PRISMIC_Category_tag {
                  category_tag
                }
              }
              title
              timestamp
              author_tag {
                __typename
                ... on PRISMIC_Author_tag {
                  author_tag
                }
              }
              hero_image
            }
            label
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
