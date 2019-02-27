import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import Slideshow from "../components/Slideshow"
import PageBody from "../components/styles/PageBody"

const PageTemplate = ({ data, location }) => {
  const { title, subtitle, body, cover, slideshow, titleHeight } = data.page
  const { excerpt, html } = (body && body.remark) || subtitle.remark
  const background = slideshow ? (
    <Slideshow>
      {slideshow.slides.map(({ title, image }) => (
        <Img key={title} fluid={image.fluid} />
      ))}
    </Slideshow>
  ) : cover ? (
    <Img fluid={cover.fluid} />
  ) : null
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle background={background} height={titleHeight}>
        <h1>{title}</h1>
        {subtitle && (
          <h2 dangerouslySetInnerHTML={{ __html: subtitle.remark.html }} />
        )}
      </PageTitle>
      {html && <PageBody dangerouslySetInnerHTML={{ __html: html }} />}
    </Global>
  )
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      ...pageFields
    }
  }
`
