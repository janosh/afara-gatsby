import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Footer = ({ copyright, authorsNote }) => (
  <Container>
    <span>
      © {new Date().getFullYear()} - {copyright}
    </span>
    <span dangerouslySetInnerHTML={{ __html: authorsNote }} />
  </Container>
)

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  authorsNote: PropTypes.string.isRequired,
}

const query = graphql`
  {
    footer: contentfulJson(title: { eq: "Footer" }) {
      data {
        copyright
        authorsNote
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer {...data.footer.data} {...props} />}
  />
)
