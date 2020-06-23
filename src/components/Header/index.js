import React from 'react'

import { HeaderContainer, SiteTitle } from './styles'
import Nav from '../Nav'
import Social from '../Social'
import Search from '../Search'
import logo from 'assets/favicon.svg'

const searchIndices = [
  { name: `Pages`, title: `Seiten`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = ({ site }) => (
  <HeaderContainer>
    <SiteTitle to="/" aria-label={site.title} rel="home">
      <img src={logo} alt={site.title} />
    </SiteTitle>
    <Nav />
    <Social collapse />
    <Search collapse indices={searchIndices} />
  </HeaderContainer>
)

export default Header
