import styled from 'styled-components'
import Img from 'gatsby-image'

export const Image = styled(Img)`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  height: ${props => (props.path === `/` ? `100vh` : `60vh`)};
  min-height: 20em;
`
