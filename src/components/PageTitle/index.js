import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { PageTitleContainer, Background, Title } from "./styles"

const PageTitle = ({ children, background, backdrop, height, defaultBg }) => (
  <PageTitleContainer height={height}>
    <Background height={height}>
      {background || <Img fluid={defaultBg.fluid} />}
    </Background>
    <Title backdrop={backdrop}>{children}</Title>
  </PageTitleContainer>
)

const query = graphql`
  {
    defaultBg: contentfulAsset(title: { eq: "Jubelnde Menschen" }) {
      title
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <PageTitle {...data} {...props} />}
  />
)
