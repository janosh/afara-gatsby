import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { mediaQueries } from 'utils/mediaQueries'

const inTitle = css`
  justify-items: center;
  padding: 0.2em 1em;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.5em;
  font-size: 0.8em;
  width: max-content;
  margin: auto;
  > :not(:first-child) {
    ${mediaQueries.minPhone} {
      padding-left: 0.7em;
      border-left: 0.1em solid;
    }
  }
  a {
    color: ${props => props.theme.lightBlue};
  }
  ${mediaQueries.maxPhone} {
    display: grid;
  }
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9em;
  > span {
    display: flex;
    align-items: center;
    :not(:last-child) {
      margin-right: 1em;
    }
  }
  ${props => props.inTitle && inTitle};
`

export const AuthorPhoto = styled(Img)`
  width: 2.5em !important;
  height: 2.5em !important;
  border-radius: 50%;
  margin-left: 0.5em;
`
