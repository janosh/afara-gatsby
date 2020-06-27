import styled, { css } from 'styled-components'
import { mediaQueries } from 'utils/mediaQueries'

const imageRow = css`
  div.image-row {
    ${mediaQueries.minTablet} {
      display: grid;
      grid-auto-flow: column;
      grid-gap: calc(0.5em + 1vw);
      grid-auto-columns: 1fr;
      width: 100%;
      p {
        margin: 0;
      }
      img {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }
`

export const Body = styled.div`
  margin-top: ${props => props.isLanding && `calc(2em + 3vh)`};
  flex: 1;
  margin: calc(3em + 3vh) 0;
  display: grid;
  grid-gap: 0 4vw;
  grid-template-columns: 1fr 1fr minmax(8em, 40em) 1fr 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: dense;
  > main {
    grid-column: 3;
  }
  ${mediaQueries.minPhablet} {
    p {
      text-align: justify;
    }
  }
  img + em,
  .gatsby-resp-image-wrapper + em {
    display: block;
    font-size: 0.9em;
    text-align: center;
    font-style: italic;
    margin-bottom: 1em;
  }
  ${imageRow}
`

export const Updated = styled.time`
  display: block;
  text-align: right;
  font-size: 0.8em;
`
