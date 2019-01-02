import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import Scroll from '../components/Scroll'
import LandingBody from '../components/styles/LandingBody'

const IndexPage = ({ data, location }) => {
  const { title, subtitle, body } = data.page
  const { excerpt, html } = body && body.data
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle>
        <h1>{title}</h1>
        {subtitle && (
          <h2 dangerouslySetInnerHTML={{ __html: subtitle.data.html }} />
        )}
      </PageTitle>
      <Scroll dir="down" to={1} justify="center" position="absolute" />
      {html && <LandingBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "/" }) {
      title
      subtitle {
        data: childMarkdownRemark {
          html
        }
      }
      body {
        data: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
