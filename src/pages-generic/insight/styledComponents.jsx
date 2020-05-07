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
    font-size: ${fonts.fontSize.h1};
    font-weight: ${fonts.fontWeight.bold};
    text-align: center;
    margin: ${spacing(4)};
    ${breakpoints.max.md} {
      font-size: 6rem;
    }
    ${breakpoints.max.sm} {
      font-size: 4rem;
    }
    ${breakpoints.max.xs} {
      font-size: 1.7rem;
    }
  `,
  Meta: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  MetaContent: styled.p`
    margin: ${spacing(4)} 0;
    font-size: 1.3rem;
    ${breakpoints.max.xs} {
      font-size: 0.85rem;
    }
  `,
  SpanSpacing: styled.span`
    margin: ${spacing(2)};
  `,
  HeroImageContainer: styled.div`
    margin: ${spacing(15)} 0rem;
    width: 100%;
    ${breakpoints.max.xs} {
      margin: 5rem 0rem;
    }
  `,
}
