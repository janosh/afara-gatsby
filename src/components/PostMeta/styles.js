import styled, { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const inTitle = css`
  justify-items: center;
  padding: 0.2em 1em;
  background: rgba(0, 0, 0, 0.6);
  border-radius: ${props => props.theme.mediumBorderRadius};
  > :not(:first-child) {
    ${mediaQuery.minPhone} {
      padding-left: 0.7em;
      border-left: ${props => props.theme.smallBorder} solid;
    }
  }
  a {
    color: ${props => props.theme.lightBlue};
  }
  ${mediaQuery.maxPhone} {
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

export const AuthorPhoto = styled.img`
  width: 2em !important;
  border-radius: 50%;
  margin-left: 0.5em;
`
