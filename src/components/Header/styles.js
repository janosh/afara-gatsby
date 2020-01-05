import styled from 'styled-components'
import { Link } from 'gatsby'

import { navLinkStyle } from '../Nav/styles'
import mediaQuery from 'utils/mediaQuery'

export const HeaderContainer = styled.header`
  z-index: 3;
  position: absolute;
  width: fill-available;
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3vw;
  align-items: center;
  padding: 1vh calc(0.75em + 1vw);
  grid-template-areas: 'nav title search';
  grid-template-columns: auto 1fr auto;
  ${mediaQuery.maxTablet} {
    grid-template-areas: 'title nav search';
  }
`

export const SiteTitle = styled(Link)`
  width: 3em;
  display: inline-grid;
  ${navLinkStyle};
  justify-self: center;
`
