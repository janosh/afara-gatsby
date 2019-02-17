import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import Scroll from "../components/Scroll"
import LandingBody from "../components/styles/LandingBody"

const IndexPage = ({ data, location }) => {
  const { title, subtitle, body } = data.page
  const { excerpt, html } = body && body.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle>
        <h1>{title}</h1>
        {subtitle && (
          <h2 dangerouslySetInnerHTML={{ __html: subtitle.remark.html }} />
        )}
      </PageTitle>
      <Scroll direction="down" to={1} align="center" position="absolute" />
      {html && <LandingBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.object.isRequired,
      body: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "/" }) {
      title
      subtitle {
        remark: childMarkdownRemark {
          html
        }
      }
      body {
        remark: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
