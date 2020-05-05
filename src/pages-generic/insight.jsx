import React from "react"
import { graphql } from "gatsby"
import { styled } from "linaria/react"
import Layout from "../components/Layout"
import { RichText } from "prismic-reactjs"
import { timeAgo } from "../utils/human-date"
import { fonts } from "../styles/linaria/theme"

const PostContainer = styled.div`
  font-family: ${fonts.fontFamily};
  margin: 5.2rem auto;
  width: 80%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.7rem;
  }
`

const Meta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MetaContent = styled.p`
  margin: 1rem 0rem;
  font-size: 1.3rem;
  @media screen and (max-width: 640px) {
    font-size: 0.85rem;
  }
`

const SpanSpacing = styled.span`
  margin: 0.6rem;
`

const HeroImage = styled.img`
  margin: 10rem 0rem;
  width: 100%;
  @media screen and (max-width: 640px) {
    margin: 5rem 0rem;
  }
`

const Insight = ({ data }) => {
  const { publishDate, title, category, author, heroImage } = xformer(data)
  const { alt, url } = heroImage

  const titlePlainText = RichText.asText(title)
  const titleTextFormatted = title.map((line, index) => (
    <React.Fragment key={index}>
      {line.text}
      <br />
    </React.Fragment>
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
