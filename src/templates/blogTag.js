import React from 'react'
import { graphql } from 'gatsby'

import Global from '../components/Global'
import PageTitle from '../components/PageTitle'
import PostList from '../components/PostList'
import TagList from '../components/TagList'

const TagTemplate = ({ data, location, title = `Blog` }) => {
  const { activeTag, tags } = data
  let { posts } = data
  const { text } = activeTag.description
  const path = location.pathname
  if (activeTag.slug !== `/`) {
    posts.edges = posts.edges.filter(({ node }) =>
      node.tags.map(tag => tag.slug).includes(activeTag.slug)
    )
  }
  return (
    <Global pageTitle={title} path={path} description={text}>
      <PageTitle title={title} />
      <TagList tags={tags.edges} />
      {posts && <PostList posts={posts.edges} />}
    </Global>
  )
}

export default TagTemplate

export const query = graphql`
  fragment tags on Query {
    tags: allContentfulTag(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
  query($slug: String!) {
    posts: allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...postFields
        }
      }
    }
    ...tags
    activeTag: contentfulTag(slug: { eq: $slug }) {
      title
      slug
      description {
        text: description
      }
    }
  }
`
