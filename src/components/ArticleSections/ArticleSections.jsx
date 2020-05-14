import React from "react"
import { v4 as uuidv4 } from "uuid"

import { styles } from "./styles"

const {
  IntroParagraph,
  ParagraphSection,
  ParagraphHeading,
  ImageContainer,
  Image,
  ImageCaption,
} = styles

const ArticleSections = ({ sections }) => {
  const sectionsMarkup = sections.map((sectionItem) => {
    const { type } = sectionItem

    switch (type) {
      case "intro_paragraph": {
        const { intro_paragraph } = sectionItem.primary
        return <IntroParagraph key={uuidv4()}>{intro_paragraph}</IntroParagraph>
      }

      case "text_section": {
        const { text_section } = sectionItem.primary
        const paragraphs = text_section.map((paragraph) => (
          <p key={uuidv4()}>{paragraph.text}</p>
        ))
        return <ParagraphSection key={uuidv4()}>{paragraphs}</ParagraphSection>
      }

      case "heading": {
        const { paragraph_heading } = sectionItem.primary
        return (
          <ParagraphHeading key={uuidv4()}>
            {paragraph_heading}
          </ParagraphHeading>
        )
      }

      case "image": {
        const {
          imageSharp,
          image_caption,
          full_width,
          image,
        } = sectionItem.fields[0]

        return (
          <ImageContainer key={uuidv4()}>
            <Image
              fluid={imageSharp.childImageSharp.fluid}
              alt={image.alt}
              fullWidth={full_width}
            />
            <ImageCaption>{image_caption}</ImageCaption>
          </ImageContainer>
        )
      }

      default:
        return null
    }
  })

  return <>{sectionsMarkup}</>
}

export default ArticleSections
