/* eslint-disable no-console */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
// import { RichText } from "prismic-reactjs"

const CaseStudy = ({ data }) => {
  const { title, description, body } = xformer(data)

  return (
    <Layout
      pageClass="case-study"
      title={`${title} | Radically Digital`}
      description={description}
    >
      {console.log(body)}
      <h1>{title}</h1>
    </Layout>
  )
}

const xformer = (data) =>
  console.log(JSON.stringify({ data })) || {
    title: data.prismic.case_study.title,
    key_task: data.prismic.case_study.key_task,
    description: data.prismic.case_study.description,
    thumbnail_image: data.prismic.case_study.thumbnail_image,
    body: data.prismic.case_study.body.map((part) => {
      if (part.type === "section") {
        return {
          title: part.primary.section_title,
          body: part.fields.map((subPart) => subPart.section_body),
        }
      }

      return part
    }),
  }

export const pageQuery = graphql`
  query CaseStudyById($uid: String!) {
    prismic {
      case_study(uid: $uid, lang: "en-gb") {
        title
        _meta {
          id
        }
        description
        key_task
        thumbnail_image
        body {
          ... on PRISMIC_Case_studyBodySection {
            type
            fields {
              section_body
            }
            label
            primary {
              section_title
            }
          }
          ... on PRISMIC_Case_studyBodyKey_point_list {
            type
            label
            primary {
              lead_copy
              key_point_list_title
            }
            fields {
              point
            }
          }
        }
      }
    }
  }
`

export default CaseStudy
