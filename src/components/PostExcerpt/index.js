import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Post, Title, Excerpt } from './styles'
import PostMeta from '../PostMeta'

const PostExcerpt = ({ post, post: { title, slug, body, featuredImage } }) => (
  <Post>
    {featuredImage && (
      <Link to={'/blog/' + slug}>
        <Img fluid={featuredImage.fluid} alt={featuredImage.title} />
      </Link>
    )}
    <main>
      <Link to={'/blog/' + slug}>
        <Title>{title}</Title>
      </Link>
      <PostMeta {...post} />
      <Excerpt dangerouslySetInnerHTML={{ __html: body.data.excerpt }} />
    </main>
  </Post>
)

export default PostExcerpt
