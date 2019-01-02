import styled from 'styled-components'

export const Container = styled.header`
  z-index: 2;
  grid-column: 2 / -2;
  grid-row: 2;
  text-align: center;
  color: ${props => props.theme.white};
  font-size: calc(1em + 1vw);
  h1 {
    text-transform: uppercase;
  }
  h2 {
    margin-top: 2.5em;
  }
`
