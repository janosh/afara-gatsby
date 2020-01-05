import React from 'react'
import { graphql } from 'gatsby'

import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import PostMeta from 'components/PostMeta'
import PageBody from 'components/styles/PageBody'

export default function PostTemplate({ data, location }) {
  const { title, body, cover } = data.post
  const { html, excerpt } = body.remark
  return (
    <Global pageTitle={title} path={location.pathname} description={excerpt}>
      <PageTitle cover={cover}>
        <h1>{title}</h1>
        <PostMeta inTitle {...data.post} />
      </PageTitle>
      <PageBody dangerouslySetInnerHTML={{ __html: html }} />
    </Global>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`
