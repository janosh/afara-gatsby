import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Link from "../Link"
import { Container, Links, Partners } from "./styles"

const Footer = ({ data, files }) => {
  const { copyright, donations, links, partnerTitle, partners } = data
  return (
    <Container>
      <span>
        © {new Date().getFullYear()} - {copyright}
      </span>
      <span css="grid-area: donations;" dangerouslySetInnerHTML={{__html:donations}}></span>
      <Links>
        {links.map(({ url, title }) => (
          <Link key={url} to={url}>
            {title}
          </Link>
        ))}
      </Links>
      <Partners>
        <span css="grid-area: title">{partnerTitle}</span>
        {partners.map(({ title, url, img }) => (
          <Link key={title} to={url} title={title}>
            <Img
              alt={title}
              fixed={files.find(file => file.title === img).fixed}
              css="border-radius: 0.5em;"
            />
          </Link>
        ))}
      </Partners>
    </Container>
  )
}

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
        partnerTitle
        partners {
          title
          url
          img
        }
      }
      files {
        title
        fixed(width: 60) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer {...data.footer} {...props} />}
  />
)
