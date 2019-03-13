import styled from "styled-components"

import mediaQuery from "../../utils/mediaQuery"

export const Container = styled.footer`
  background-color: ${props => props.theme.darkGray};
  padding: 5vh 5vw;
  color: ${props => props.theme.white};
  display: grid;
  grid-template-areas:
    "copyright"
    "donations"
    "links"
    "partners";
  justify-items: center;
  grid-gap: 4vh 6vw;
  a {
    color: ${props => props.theme.orange};
  }
  ${mediaQuery.minPhablet} {
    grid-template-areas:
      "copyright donations"
      "partners links";
  }
`

export const Links = styled.nav`
  grid-area: links;
  display: grid;
  grid-gap: 1em;
  justify-items: center;
  ${mediaQuery.minPhone} {
    grid-template-columns: max-content;
    grid-auto-flow: column;
  }
`

export const Partners = styled.div`
  grid-area: partners;
  display: grid;
  grid-gap: 1em;
  grid-template-areas: "title title";
  justify-items: center;
`
