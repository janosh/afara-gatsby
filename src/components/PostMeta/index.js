import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { UserEdit } from "styled-icons/fa-solid/UserEdit"
import { Calendar as Date } from "styled-icons/octicons/Calendar"
import { Timer } from "styled-icons/material/Timer"

import { Meta, AuthorPhoto } from "./styles"

const PostMeta = ({ author, date, tags, body, inTitle, iconSize }) => (
  <Fragment>
    <Meta inTitle={inTitle}>
      <span>
        <UserEdit size={iconSize} />
        &nbsp;
        <a href={`mailto:${author.email}`}>{author.name}</a>
        <AuthorPhoto fixed={author.photo.fixed} />
      </span>
      <span>
        <Date size={iconSize} />
        &ensp;
        {date}
      </span>
      <span>
        <Timer size={iconSize} />
        &ensp;
        {body.remark.timeToRead} min read
      </span>
    </Meta>
    {!inTitle && (
      <div>
        <span>Tags: </span>
        {tags.map(({ title, slug }, index) => (
          <Fragment key={slug}>
            {!!index && `, `}
            <Link to={`blog/` + slug}>{title}</Link>
          </Fragment>
        ))}
      </div>
    )}
  </Fragment>
)

export default PostMeta

PostMeta.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  body: PropTypes.object.isRequired,
}

PostMeta.defaultProps = {
  iconSize: `1.4em`,
}
