import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Global from 'components/Global'
import PageTitle from 'components/PageTitle'
import TagList from 'components/TagList'
import PostList from 'components/PostList'
import PageBody from 'components/PageBody'

const filterPostsByTag = (tag, posts) =>
  tag === `alle`
    ? posts
    : posts.filter(post => post.tags.map(tag => tag.slug).includes(tag))

const readActiveTagFromUrl = urlParams => urlParams.replace(/.*tag=([^&]+).*/, `$1`)

export default function BlogPage({ data, location }) {
  const { posts, tags } = data
  const urlTag = readActiveTagFromUrl(location.search)
  const [tag, setTag] = useState(urlTag || `alle`)
  const filteredPosts = filterPostsByTag(tag, posts.nodes)

  const handleTagClick = tag => {
    setTag(tag)
    history.replaceState(
      { activeTag: tag },
      `active tag: ${tag}`,
      tag === `alle` ? `/blog` : `/blog?tag=${tag}`
    )
  }

  return (
    <Global pageTitle="Blog" path={location.pathname}>
      <PageTitle>
        <h1>Blog</h1>
      </PageTitle>
      <PageBody>
        <TagList tags={tags.nodes} activeTag={tag} setTag={handleTagClick} />
        <PostList posts={filteredPosts} />
      </PageBody>
    </Global>
  )
}

export const query = graphql`
  {
    posts: allContentfulPost(sort: { fields: [date], order: DESC }) {
      nodes {
        ...postFields
      }
    }
    tags: allContentfulTag(sort: { fields: [title], order: ASC }) {
      nodes {
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
`
