import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Image } from './styles'

const Hero = ({ hero, defaultHero, path }) => (
  <Image
    fluid={(hero && hero.fluid) || defaultHero.fluid}
    alt={(hero && hero.title) || defaultHero.title}
    path={path}
  />
)

Hero.propTypes = {
  defaultHero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fluid: PropTypes.object.isRequired,
  }).isRequired,
  hero: PropTypes.shape({
    title: PropTypes.string,
    fluid: PropTypes.object,
  }),
}

const query = graphql`
  {
    defaultHero: contentfulAsset(title: { eq: "Hero" }) {
      title
      fluid(quality: 100, maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Hero {...data} {...props} />} />
)
