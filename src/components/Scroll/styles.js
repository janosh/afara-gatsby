import styled from 'styled-components'
import { ArrowDownCircle as Down } from 'styled-icons/feather'
import { ArrowUpCircle as Up } from 'styled-icons/feather'

export const Arrow = styled(Down).attrs(props => ({
  as: props.direction === `up` && Up,
}))`
  z-index: 2;
  background: ${props => props.theme.lightGreen} !important;
  border-radius: 50% !important;
  padding: 0 !important;
  color: white;
  transition: 0.3s;
  position: absolute;
  bottom: 1em;
  right: calc(50vw - ${props => props.size} / 2);
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? `visible` : `hidden`)};
  width: ${props => props.size};
  height: ${props => props.size};
  :hover {
    transform: scale(1.15);
    background: ${props => props.theme.orange};
  }
`
