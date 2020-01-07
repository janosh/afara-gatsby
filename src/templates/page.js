import React from 'react'
import { graphql } from 'gatsby'

import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import PageBody from 'components/PageBody'
import Toc from 'components/Toc'

const PageTemplate = ({ data, location }) => {
  const { title, subtitle, body, cover, slideshow, options, updatedAt } = data.page
  const { titleHeight: height, showToc } = options || {}
  const { excerpt } = (body && body.remark) || subtitle.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle {...{ slideshow, cover, height }}>
        <h1>{title}</h1>
        {subtitle && (
          <h2 dangerouslySetInnerHTML={{ __html: subtitle.remark.html }} />
        )}
      </PageTitle>
      {body && (
        <PageBody html={body.remark.html} updatedAt={updatedAt}>
          {showToc && <Toc />}
        </PageBody>
      )}
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
