import { theme } from "../../styles/theme"
import { styled } from "linaria/react"

const { spacing, fonts } = theme

export const styles = {
  IntroParagraph: styled.section`
    font-size: ${fonts.fontSize.paragraph.xl};
    line-height: ${fonts.lineHeight.paragraph.xl};
    font-weight: ${fonts.fontWeight.bold};
    margin-bottom: ${spacing(10)};

    &::first-letter {
      font-size: 8.4rem;
      float: left;
      margin-top: 0.15em;
    }
  `,
}
