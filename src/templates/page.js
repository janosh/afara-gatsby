import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/styles/PageBody'

const PageTemplate = ({ data: { page }, location }) => {
  const { title, body } = page
  const { excerpt, html } = body && body.data
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle title={title} />
      {html && <PageBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        data: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
