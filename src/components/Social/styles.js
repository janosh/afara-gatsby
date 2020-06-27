import styled, { css } from 'styled-components'
import { Share } from 'styled-icons/material'
import { FacebookF as Facebook } from 'styled-icons/fa-brands'
import { Instagram } from 'styled-icons/boxicons-logos'

import { mediaQueries } from 'utils/mediaQueries'

export const SocialRoot = styled.a`
  position: relative;
`

const collapse = css`
  grid-gap: 2vh;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background: black;
  border-radius: 0.2em;
  padding: 1vmin;
  font-size: 1.6em;
  transition: 0.3s;
  ${SocialRoot}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const alwaysShow = css`
  grid-auto-flow: column;
  grid-gap: 1.5vw;
  ${props => props.styles};
`

export const Div = styled.div`
  display: grid;
  justify-content: center;
  ${mediaQueries.maxTablet} {
    ${props => (props.collapse ? collapse : alwaysShow)};
  }
  ${mediaQueries.minTablet} {
    ${alwaysShow};
  }
`

export const Toggle = styled(Share)`
  cursor: pointer;
  font-size: 1.3em;
  ${props => props.styles};
  ${mediaQueries.minTablet} {
    display: none;
  }
`

export const Link = styled.a`
  ${props => props.styles};
  svg {
    display: block;
  }
`

export const Icons = {
  Facebook,
  Instagram,
}
