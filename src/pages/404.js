import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Global from '../components/Global'

const CenterBox = styled.div`
  grid-area: 3/3/-3/-3;
  z-index: 2;
  color: ${props => props.theme.white};
  text-align: center;
  align-self: center;
  justify-self: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5em;
  width: max-content;
  padding: 0 3em;
  a {
    color: ${props => props.theme.yellow};
  }
`

const Img = styled(Image)`
  width: 100vw;
  height: 100vh;
  grid-area: 1/1/-1/-1;
`

const PageNotFound = ({ data, location }) => {
  return (
    <Global pageTitle="Fehler 404" path={location.pathname} showHero={false}>
      <Img fluid={data.background.fluid} />
      <CenterBox>
        <h2>Diese Seite existiert nicht</h2>
        <h3>
          Zurück zur <Link to="/">Startseite</Link>
        </h3>
      </CenterBox>
    </Global>
  )
}

export default PageNotFound

export const query = graphql`
  {
    background: contentfulAsset(title: { eq: "Kaja Riebesell" }) {
      fluid(quality: 100, maxWidth: 2500) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
