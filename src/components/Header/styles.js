import styled from 'styled-components'
import { Link } from 'gatsby'
import mediaQuery from 'utils/mediaQuery'

export const HeaderContainer = styled.header`
  z-index: 1;
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
  font-size: 1.3em;
  ${mediaQuery.minTablet} {
    grid-template-areas: 'title nav search';
  }
  a {
    color: white;
    transition: 0.3s;
    cursor: pointer;
    &.active {
      color: ${props => props.theme.orange};
    }
    :hover {
      color: ${props => props.theme.lightBlue};
    }
  }
`

export const SiteTitle = styled(Link)`
  width: 2.5em;
  grid-area: title;
  display: inline-grid;
  justify-self: center;
  background: white;
  border-radius: 50%;
  padding: 0.15em;
`
