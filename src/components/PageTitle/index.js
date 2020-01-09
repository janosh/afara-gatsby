import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slideshow from '../Slideshow'

import { PageTitleDiv, Title } from './styles'

export default function PageTitle({ children, slideshow, cover, height = 60 }) {
  const { defaultBg } = useStaticQuery(graphql`
    {
      defaultBg: contentfulAsset(title: { eq: "Jubelnde Menschen" }) {
        ...fluid
      }
    }
  `)
  if (!cover) cover = defaultBg
  return (
    <PageTitleDiv height={height}>
      {slideshow ? (
        <Slideshow>
          {slideshow.slides.map(slide => (
            <Img key={slide.title} {...slide} />
          ))}
        </Slideshow>
      ) : (
        <Img {...cover} style={{ width: `100%`, height: height + `vh` }} />
      )}
      <Title>{children}</Title>
    </PageTitleDiv>
  )
}
