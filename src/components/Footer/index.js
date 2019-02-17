import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Link from "../Link"
import { Container, Links } from "./styles"

const Footer = ({ copyright, donations, links }) => (
  <Container>
    <span>
      © {new Date().getFullYear()} - {copyright}
    </span>
    <span>{donations}</span>
    <Links>
      {links.map(({ url, title }) => (
        <Link key={url} to={url}>
          {title}
        </Link>
      ))}
    </Links>
  </Container>
)

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  donations: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

const query = graphql`
  {
    footer: contentfulJson(title: { eq: "Footer" }) {
      data {
        copyright
        donations
        links {
          url
          title
        }
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
