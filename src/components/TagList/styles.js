import styled from 'styled-components'
import { Link } from 'gatsby'

export const TagContainer = styled.div`
  grid-column: 2 / -2;
  text-align: center;
  margin-top: 1em;
`

export const TagIcon = styled.img`
  height: 1.75em;
  width: 1.75em;
  min-width: 1.75em;
  margin-right: 0.7em;
  background: ${props => props.theme.lightGray};
  border-radius: ${props => props.theme.mediumBorderRadius};
  padding: 0.2em;
`

export const TagLink = styled(Link)`
  display: flex;
  align-items: center;
  &.${props => props.activeClassName} {
    color: ${props => props.theme.orange};
  }
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 0 1em 1em 0;
  }
`
