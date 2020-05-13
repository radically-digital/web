import React from "react"

import { styles } from "./styles"

const { IntroParagraph } = styles

const ArticleSections = ({ sections }) => {
  const sectionsMarkup = sections.map((sectionItem) => {
    const item = sectionItem.primary

    if (item.intro_paragraph) {
      return (
        <IntroParagraph key={item.intro_paragraph}>
          {item.intro_paragraph}
        </IntroParagraph>
      )
    }

    if (item.text_section) {
      const paragraphs = item.text_section.map((paragraph) => {
        return <p key={paragraph.text}>{paragraph.text}</p>
      })

      return <>{paragraphs}</>
    }

    return null
  })

  return <>{sectionsMarkup}</>
}

export default ArticleSections
