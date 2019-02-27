import styled from "styled-components"

import imageRow from "./imageRow"
import mediaQuery from "../../utils/mediaQuery"

const PageBody = styled.main`
  display: grid;
  grid-gap: 0 4vw;
  grid-template-columns: 1fr 1fr minmax(auto, ${props => props.theme.maxWidth}) 1fr 1fr;
  margin: calc(2em + 2vh) 0;
  ${mediaQuery.minPhablet} {
    text-align: justify;
  }
  > * {
    grid-column: 3;
  }
  img {
    width: 100%;
  }
  img + em,
  .gatsby-resp-image-wrapper + em {
    display: block;
    font-size: 0.9em;
    text-align: center;
    font-style: italic;
    margin-bottom: 1em;
  }
  ${imageRow};
`

export default PageBody
