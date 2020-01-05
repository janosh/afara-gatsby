import React from 'react'
import { graphql } from 'gatsby'

import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import PageBody from 'components/styles/PageBody'

const PageTemplate = ({ data, location }) => {
  const { title, subtitle, body, cover, slideshow, titleHeight: height } = data.page
  const { excerpt } = (body && body.remark) || subtitle.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle {...{ slideshow, cover, height }}>
        <h1>{title}</h1>
        {subtitle && (
          <h2 dangerouslySetInnerHTML={{ __html: subtitle.remark.html }} />
        )}
      </PageTitle>
      {body && <PageBody dangerouslySetInnerHTML={{ __html: body.remark.html }} />}
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
