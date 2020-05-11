import { theme } from "../../styles/theme"
import { styled } from "linaria/react"

const { fonts, spacing, breakpoints } = theme

export const styledComponents = {
  PostContainer: styled.div`
    margin: ${spacing(20)} auto;
    width: 80%;
    ${breakpoints.max.xs} {
      width: 100%;
    }
  `,
  Title: styled.h1`
    font-size: ${fonts.fontSize.h1.lg};
    font-weight: ${fonts.fontWeight.bold};
    text-align: center;
    margin: ${spacing(4)};
    ${breakpoints.max.md} {
      font-size: ${fonts.fontSize.h1.md};
    }
    ${breakpoints.max.sm} {
      font-size: ${fonts.fontSize.h1.sm};
    }
    ${breakpoints.max.xs} {
      font-size: ${fonts.fontSize.h1.xs};
    }
  `,
  Meta: styled.div`
    margin: ${spacing(8)} 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${breakpoints.max.xs} {
      margin: ${spacing(4)} 0;
  `,
  MetaContent: styled.p`
    font-size: ${fonts.fontSize.meta.lg};
    ${breakpoints.max.xs} {
      font-size: ${fonts.fontSize.meta.xs};
    }
  `,
  SpanSpacing: styled.span`
    margin: ${spacing(2)};
  `,
  HeroImageContainer: styled.div`
    margin: ${spacing(15)} 0rem;
    width: 100%;
    ${breakpoints.max.xs} {
      margin: ${spacing(10)} 0rem;
    }
  `,
}
