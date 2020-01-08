import styled, { css } from 'styled-components'

export const PageTitleDiv = styled.hgroup`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height || 60) + `vh`};
`

export const Background = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
  height: ${props => (props.height || 60) + `vh`};
  > * {
    height: 100%;
  }
`

const backdrop = css`
  > * {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.2em;
    justify-self: center;
    padding: 0.1em 0.4em;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: calc(1em + 0.5vw);
  margin-top: 2em;
  z-index: 2;
  ${props => props.backdrop && backdrop};
`
