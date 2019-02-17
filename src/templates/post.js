import React from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PostTitle from "../components/PostTitle"
import PageBody from "../components/styles/PageBody"

const PostTemplate = ({ data: { post }, location }) => {
  const { title, body, featuredImage } = post
  const { html, excerpt } = body.remark
  return (
    <Global
      pageTitle={title}
      path={location.pathname}
      description={excerpt}
      hero={featuredImage}
    >
      <PostTitle post={post} />
      <PageBody dangerouslySetInnerHTML={{ __html: html }} />
    </Global>
  )
}

export default PostTemplate

export const query = graphql`
  fragment postFields on ContentfulPost {
    slug
    title
    author {
      name
      email
      photo {
        fixed(width: 100) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
    tags {
      title
      slug
    }
    date(formatString: "MMM D, YYYY")
    body {
      remark: childMarkdownRemark {
        html
        timeToRead
        excerpt
      }
    }
    featuredImage {
      title
      fluid(quality: 100, maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`
