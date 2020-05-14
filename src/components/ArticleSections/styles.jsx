import { theme } from "../../styles/theme"
import { styled } from "linaria/react"
import { breakpoints } from "../../styles/theme/breakpoints"
import Img from "gatsby-image"

const { spacing, fonts } = theme

const textMargins = `
    margin: 0 ${spacing(5)} ${spacing(10)};

    ${breakpoints.md} {
      margin: 0 ${spacing(40)} ${spacing(10)};
    }
    ${breakpoints.xl} {
      margin: 0 ${spacing(100)} ${spacing(10)};
    }
`

export const styles = {
  IntroParagraph: styled.section`
    font-size: ${fonts.fontSize.paragraph.lg};
    line-height: ${fonts.lineHeight.paragraph.xl};
    font-weight: ${fonts.fontWeight.bold};

    ${textMargins}

    ${breakpoints.xs} {
      font-size: ${fonts.fontSize.paragraph.xl};
    }

    &::first-letter {
      font-size: 8.4rem;
      float: left;
      margin-top: 0.15em;
    }
  `,
  ParagraphSection: styled.section`
    margin-bottom: ${spacing(10)};
    ${textMargins}
  `,
  ParagraphHeading: styled.h2`
    font-size: ${fonts.fontSize.heading.xs};
    ${textMargins}

    ${breakpoints.xs} {
      font-size: ${fonts.fontSize.heading.sm};
    },
  `,
  ImageContainer: styled.div`
    margin-bottom: ${spacing(10)};
  `,
  Image: styled(Img)`
    margin: 0 0 ${spacing(5)};

    ${breakpoints.lg} {
      margin: 0 ${(props) => (props.fullWidth ? 0 : spacing(30))} ${spacing(5)};
    }
    ${breakpoints.xl} {
      margin: 0 ${(props) => (props.fullWidth ? 0 : spacing(70))} ${spacing(5)};
    }
  `,
  ImageCaption: styled.p`
    ${textMargins}
    font-size: ${fonts.fontSize.paragraph.sm}
    opacity: 59%
  `,
}
