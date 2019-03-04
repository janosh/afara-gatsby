import React from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PostTitle from "../components/PostTitle"
import PageBody from "../components/styles/PageBody"

const PostTemplate = ({ data: { post }, location }) => {
  const { title, body, cover } = post
  const { html, excerpt } = body.remark
  return (
    <Global
      pageTitle={title}
      path={location.pathname}
      description={excerpt}
      hero={cover}
    >
      <PostTitle post={post} />
      <PageBody dangerouslySetInnerHTML={{ __html: html }} />
    </Global>
  )
}

export default PostTemplate

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`
