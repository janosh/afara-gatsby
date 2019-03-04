import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Post, Title, Excerpt } from "./styles"
import PostMeta from "../PostMeta"

const PostExcerpt = ({ post, post: { title, slug, body, cover } }) => (
  <Post>
    {cover && (
      <Link to={`/blog/` + slug}>
        <Img fluid={cover.fluid} alt={cover.title} />
      </Link>
    )}
    <main>
      <Link to={`/blog/` + slug}>
        <Title>{title}</Title>
      </Link>
      <PostMeta {...post} />
      <Excerpt dangerouslySetInnerHTML={{ __html: body.remark.excerpt }} />
    </main>
  </Post>
)

export default PostExcerpt
