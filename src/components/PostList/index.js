import React from 'react'

import PostExcerpt from '../PostExcerpt'
import Grid from '../Grid'
import { PostListContainer } from './styles'

const PostList = ({ posts, ...rest }) => (
  <PostListContainer>
    <Grid minWidth="20em" maxWidth="24em" gap="2em 1.5em">
      {posts.map(post => (
        <PostExcerpt key={post.slug} post={post} {...rest} />
      ))}
    </Grid>
  </PostListContainer>
)

export default PostList
