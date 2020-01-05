import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Post, Title, Excerpt } from './styles'
import PostMeta from '../PostMeta'

export default function PostExcerpt({ post }) {
  const { title, slug, body, cover } = post
  return (
    <Post>
      {cover && (
        <Link to={slug}>
          <Img fluid={cover.fluid} alt={cover.title} css="height: 15em;" />
        </Link>
      )}
      <main>
        <Link to={slug}>
          <Title>{title}</Title>
        </Link>
        <PostMeta {...post} />
        <Excerpt dangerouslySetInnerHTML={{ __html: body.remark.excerpt }} />
      </main>
    </Post>
  )
}
