import React from "react"
import { v4 as uuidv4 } from "uuid"

import { styles } from "./styles"

const { IntroParagraph } = styles

const ArticleSections = ({ sections }) => {
  const sectionsMarkup = sections.map((sectionItem) => {
    const item = sectionItem.primary

    if (item.intro_paragraph) {
      return (
        <IntroParagraph key={uuidv4()}>{item.intro_paragraph}</IntroParagraph>
      )
    }

    if (item.text_section) {
      const paragraphs = item.text_section.map((paragraph) => (
        <p key={uuidv4()}>{paragraph.text}</p>
      ))

      return <section key={uuidv4()}>{paragraphs}</section>
    }

    return null
  })

  return <>{sectionsMarkup}</>
}

export default ArticleSections
