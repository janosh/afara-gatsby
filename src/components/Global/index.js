import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import Helmet from '../Helmet'
import Hero from '../Hero'
import Header from '../Header'
import Footer from '../Footer'
import theme from '../../utils/theme'
import Scroll from '../Scroll'

import { Root, GlobalStyle } from './styles'

const Global = ({ children, site, path, showHero = true, hero, ...rest }) => (
  <ThemeProvider theme={theme}>
    <Root>
      <Helmet site={site.meta} path={path} {...rest} />
      <GlobalStyle />
      {showHero && <Hero hero={hero} path={path} />}
      <Header site={site.meta} />
      {children}
      <Footer />
      <Scroll to="top" position="fixed" justify="right" showBelow={1000} />
    </Root>
  </ThemeProvider>
)

Global.propTypes = {
  site: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  showHero: PropTypes.bool,
  hero: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const query = graphql`
  {
    site {
      meta: siteMetadata {
        title
        url: siteUrl
        description
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Global {...data} {...props} />} />
)
