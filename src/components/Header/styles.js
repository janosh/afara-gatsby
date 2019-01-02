import styled from 'styled-components'
import { Link } from 'gatsby'

import { navLinkStyle } from '../Nav/styles'
import mediaQuery from '../../utils/mediaQuery'

export const HeaderContainer = styled.header`
  grid-column: 1 / -1;
  grid-row: 1;
  z-index: 3;
  align-self: start;
  background: rgba(0, 0, 0, 0.2);
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
