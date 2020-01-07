import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slideshow from 'components/Slideshow'

import { PageTitleContainer, Background, Title } from './styles'

export default function PageTitle({ children, slideshow, cover, backdrop, height }) {
  const { defaultBg } = useStaticQuery(graphql`
    {
      defaultBg: contentfulAsset(title: { eq: "Jubelnde Menschen" }) {
        title
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  `)
  return (
    <PageTitleContainer height={height}>
      <Background height={height}>
        {slideshow ? (
          <Slideshow>
            {slideshow.slides.map(({ title, fluid }) => (
              <Img key={title} fluid={fluid} alt={title} />
            ))}
          </Slideshow>
        ) : (
          <Img {...(cover || defaultBg)} alt={(cover || defaultBg).title} />
        )}
      </Background>
      <Title backdrop={backdrop}>{children}</Title>
    </PageTitleContainer>
  )
}
