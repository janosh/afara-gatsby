import styled from 'styled-components'

import imageRow from './imageRow'
import team from './team'
import mediaQuery from '../../utils/mediaQuery'

const PageBody = styled.article`
  grid-column: 3;
  margin: 9vh 0;
  ${mediaQuery.minPhablet} {
    text-align: justify;
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
  ${team};
`

export default PageBody
