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
    font-size: ${fonts.fontSize.lg.h1};
    font-weight: ${fonts.fontWeight.bold};
    text-align: center;
    margin: ${spacing(4)};
    ${breakpoints.max.md} {
      font-size: ${fonts.fontSize.md.h1};
    }
    ${breakpoints.max.sm} {
      font-size: ${fonts.fontSize.sm.h1};
    }
    ${breakpoints.max.xs} {
      font-size: ${fonts.fontSize.xs.h1};
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
    font-size: ${fonts.fontSize.lg.meta};
    ${breakpoints.max.xs} {
      font-size: ${fonts.fontSize.xs.meta};
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
