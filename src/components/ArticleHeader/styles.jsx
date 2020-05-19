import { theme } from "../../styles/theme"
import { styled } from "linaria/react"
import Img from "gatsby-image"

const { fonts, spacing, breakpoints } = theme

export const styles = {
  Title: styled.h1`
    font-size: ${fonts.fontSize.heading.xs};
    font-weight: ${fonts.fontWeight.bold};
    text-align: center;
    margin: ${spacing(4)};
    ${breakpoints.xs} {
      font-size: ${fonts.fontSize.heading.sm};
    }
    ${breakpoints.sm} {
      font-size: ${fonts.fontSize.heading.md};
    }
    ${breakpoints.lg} {
      font-size: ${fonts.fontSize.heading.lg};
    }
  `,
  Meta: styled.div`
    margin: ${spacing(4)} 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${breakpoints.xs} {
      margin: ${spacing(8)} 0;
    }
  `,
  MetaContent: styled.p`
    font-size: ${fonts.fontSize.paragraph.xs};
    font-weight: ${fonts.fontWeight.bold};
    ${breakpoints.xs} {
      font-size: ${fonts.fontSize.paragraph.sm};
    }
  `,
  SpanSpacing: styled.span`
    margin: ${spacing(2)};
    &::after {
      content: "•";
    }
  `,
  HeroImage: styled(Img)`
    margin: ${spacing(10)} 0rem;
    width: 100%;
    ${breakpoints.xs} {
      margin: ${spacing(15)} 0rem;
    }
  `,
}
