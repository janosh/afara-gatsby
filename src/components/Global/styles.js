import { createGlobalStyle } from 'styled-components'

import mediaQuery, { screens } from 'utils/mediaQuery'
import typography from 'utils/typography'

const { phone, desktop } = screens
const {
  baseFont,
  headingFont,
  minFontSize,
  maxFontSize,
  minLineHeight,
  maxLineHeight,
} = typography

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${baseFont};
    font-size: ${minFontSize}em;
    line-height: ${minLineHeight}em;
    ${mediaQuery.minPhone} {
      font-size: calc(${minFontSize}em + (${maxFontSize} - ${minFontSize}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
      line-height: calc(${minLineHeight}em + (${maxLineHeight} - ${minLineHeight}) * ((100vw - ${phone}em) / (${desktop} - ${phone})));
    }
    ${mediaQuery.minDesktop} {
      font-size: ${maxFontSize}em;
      line-height: ${maxLineHeight}em;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: initial;
    font-family: ${headingFont}, ${baseFont};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.blue};
    :hover {
      color: ${props => props.theme.orange} !important;
    }
  }
  /* ensure full height page even if unsufficient content */
  div[role="group"][tabindex] {
    min-height: 100vh;
    display: grid;
  }
`
