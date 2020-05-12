import React from "react"
import { styles } from "./styles"

const { HeroImage, Meta, MetaContent, SpanSpacing, Title } = styles

const ArticleHeader = ({
  publishDate,
  title,
  category,
  author,
  heroImage,
  heroImageAlt,
}) => {
  return (
    <header>
      <Meta>
        <MetaContent>{category}</MetaContent>
      </Meta>
      <Title>{title}</Title>
      <Meta>
        <MetaContent>
          {publishDate}
          <SpanSpacing />
          {author}
        </MetaContent>
      </Meta>
      <HeroImage fluid={heroImage} alt={heroImageAlt} />
    </header>
  )
}

export default ArticleHeader
