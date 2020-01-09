import styled from 'styled-components'

export const PageTitleDiv = styled.hgroup`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height + `vh`};
  overflow: hidden;
`

export const Title = styled.div`
  text-align: center;
  font-size: calc(1em + 0.5vw);
  margin-top: 2em;
  position: absolute;
  a {
    color: ${props => props.theme.lightYellow};
  }
`
