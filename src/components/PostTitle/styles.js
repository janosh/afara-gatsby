import styled from 'styled-components'

export const PostHeader = styled.header`
  z-index: 2;
  grid-column: 2 / -2;
  grid-row: 1 / 3;
  color: ${props => props.theme.white};
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
  h1 {
    padding: 0.2em 0.5em;
    margin: 4vmin 4vmin 8vmin;
    background: rgba(0, 0, 0, 0.5);
    border-radius: ${props => props.theme.mediumBorderRadius};
  }
`
