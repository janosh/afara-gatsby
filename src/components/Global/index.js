import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

import Seo from "../Seo"
import Header from "../Header"
import Footer from "../Footer"
import theme from "../../utils/theme"
import Scroll from "../Scroll"

import { GlobalStyle } from "./styles"

const Global = ({ children, site, path, ...rest }) => (
  <ThemeProvider theme={theme}>
    <>
      <Seo site={site} path={path} {...rest} />
      <GlobalStyle />
      <Header site={site} />
      {children}
      <Footer />
      <Scroll to="top" position="fixed" align="right" showBelow={1000} />
    </>
  </ThemeProvider>
)

Global.propTypes = {
  site: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  cover: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const query = graphql`
  {
    site {
      site: siteMetadata {
        title
        url
        description
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Global {...data.site} {...props} />}
  />
)
