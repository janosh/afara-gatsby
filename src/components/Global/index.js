import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Seo from '../Seo'
import Header from '../Header'
import Footer from '../Footer'
import theme from 'utils/theme'
import Scroll from '../Scroll'

import { GlobalStyle } from './styles'

export default function Global({ children, path, ...rest }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        site: siteMetadata {
          title
          url
          description
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo {...site} path={path} {...rest} />
        <GlobalStyle />
        <Header {...site} />
        {children}
        <Footer />
        <Scroll showBelow={600} css="position: fixed; right: 1em; bottom: 1em;" />
      </>
    </ThemeProvider>
  )
}
