import React from "react"
import { graphql } from "gatsby"
import { styled } from "linaria/react"
import Layout from "../components/Layout"
import { RichText } from "prismic-reactjs"
import { timeAgo } from "../utils/human-date"

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
`

const SpanSpacing = styled.SpanSpacing`
  margin: 0.6rem;
`

const HeroImage = styled.img`
  margin: 10rem 0rem;
  width: 100%;
`

const Insight = ({ data }) => {
  const { publishDate, title, category, author, heroImage } = xformer(data)
  const { alt, url } = heroImage

  const titlePlainText = RichText.asText(title)
  const titleTextFormatted = title.map((line) => (
    <>
      {line.text}
      <br />
    </>
  ))

  return (
    <Layout
      pageClass="blog-post"
      title={titlePlainText}
      description={"Placeholder"}
    >
      <section>
        <PostContainer>
          <Meta>
            <MetaContent>{category}</MetaContent>
          </Meta>
          <Title>{titleTextFormatted}</Title>
          <Meta>
            <MetaContent>
              {publishDate}
              <SpanSpacing>•</SpanSpacing>
              {author}
            </MetaContent>
          </Meta>
          <HeroImage src={url} alt={alt} />
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
  } = data.prismic.insight

  return {
    category: category_tag.category_tag,
    title: title,
    author: author_tag.author_tag,
    publishDate: timeAgo(timestamp),
    heroImage: hero_image,
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
        timestamp
        hero_image
        _meta {
          firstPublicationDate
          uid
        }
      }
    }
  }
`

export default Insight
