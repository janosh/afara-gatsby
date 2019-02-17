import React from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import PageBody from "../components/styles/PageBody"

const PageTemplate = ({ data, location }) => {
  const { title, subtitle, body, cover, fullHeightCover } = data.page
  const { excerpt, html } = (body && body.remark) || subtitle.remark
  return (
    <Global
      pageTitle={title}
      path={location.pathname}
      description={excerpt}
      cover={{ ...cover, fullHeight: fullHeightCover }}
    >
      <PageTitle title={title} />
      {html && <PageBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

export default PageTemplate

export const query = graphql`
  fragment pageFields on ContentfulPage {
    title
    subtitle {
      remark: childMarkdownRemark {
        excerpt
        html
      }
    }
    slug
    body {
      remark: childMarkdownRemark {
        excerpt
        html
      }
    }
    cover {
      fluid {
        src
      }
    }
    fullHeightCover
  }
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      ...pageFields
    }
  }
`
