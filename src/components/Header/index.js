import React from 'react'

import { HeaderContainer, SiteTitle } from './styles'
import Nav from '../Nav'
import Social from '../Social'
import Search from '../Search'
import Logo from 'assets/logo'

const searchIndices = [
  { name: `Pages`, title: `Seiten`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = ({ site }) => (
  <HeaderContainer>
    <SiteTitle to="/" title={site.title} rel="home">
      <Logo alt={site.title} />
    </SiteTitle>
    <Nav />
    <Social collapse />
    <Search collapse indices={searchIndices} />
  </HeaderContainer>
)

export default Header
