import styled from 'styled-components'

export const Post = styled.article`
  height: 100%;
  display: grid;
  background: ${props => props.theme.lighterGray};
  border-radius: 0.5em;
  border: 1px solid ${props => props.theme.lightGray};
  overflow: hidden;
  > main {
    padding: 0.7em 1em;
    display: grid;
    grid-gap: 0.5em;
  }
  a:first-child {
    height: min-content;
  }
`

export const Title = styled.h3`
  margin: 0;
`

export const Excerpt = styled.p`
  margin: 0;
`
