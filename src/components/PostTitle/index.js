import React from 'react'

import { PostHeader } from './styles'
import PostMeta from '../PostMeta'

const PostTitle = ({ post }) => (
  <PostHeader>
    <h1>{post.title}</h1>
    <PostMeta inTitle {...post} />
  </PostHeader>
)

export default PostTitle
