import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import { Image } from "./styles"

const Cover = ({ cover, defaultCover }) => {
  const { fluid, title, fullHeight } =
    cover && cover.fluid ? cover : defaultCover
  return <Image fluid={fluid} alt={title} fullHeight={fullHeight} />
}

Cover.propTypes = {
  defaultCover: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fluid: PropTypes.object.isRequired,
  }).isRequired,
  cover: PropTypes.shape({
    title: PropTypes.string,
    fluid: PropTypes.object,
  }).isRequired,
}

const query = graphql`
  {
    defaultCover: contentfulAsset(title: { eq: "Jubelnde Menschen" }) {
      title
      fluid(quality: 100, maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Cover {...data} {...props} />} />
)
