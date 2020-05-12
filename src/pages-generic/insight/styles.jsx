import { theme } from "../../styles/theme"
import { styled } from "linaria/react"

const { spacing, breakpoints } = theme

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
}
