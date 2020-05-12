import { theme } from "../../styles/theme"
import { styled } from "linaria/react"

const { spacing, breakpoints, fonts } = theme

export const styles = {
  PostContainer: styled.article`
    margin: ${spacing(20)} auto;
    width: 100%;
    ${breakpoints.xs} {
      width: 80%;
    }
  `,
  ArticleBody: styled.div`
    padding: 0 ${spacing(50)};
  `,
  IntroParagraph: styled.section`
    font-size: ${fonts.fontSize.paragraph.xl};
    line-height: ${fonts.lineHeight.paragraph.xl};
    font-weight: ${fonts.fontWeight.bold};

    &::first-letter {
      font-size: ${2.8 * 3}rem;
      float: left;
      margin-top: 0.15em;
    }
  `,
}
