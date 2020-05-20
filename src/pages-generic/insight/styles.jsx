import { theme } from "../../styles/theme"
import { styled } from "linaria/react"

const { spacing, breakpoints } = theme

export const styles = {
  HeaderContainer: styled.section`
    margin: ${spacing(10)} auto;
    width: 100%;
    ${breakpoints.xs} {
      margin: ${spacing(20)} auto;
      width: 85%;
    }
  `,
}
