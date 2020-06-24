import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { UserEdit, Tags } from 'styled-icons/fa-solid'
import { Calendar as Date } from 'styled-icons/octicons'
import { Timer } from 'styled-icons/material'

import { Meta, AuthorPhoto } from './styles'

const PostMeta = ({ author, date, tags, body, inTitle, iconSize }) => (
  <>
    <Meta inTitle={inTitle}>
      <span>
        <UserEdit size={iconSize} />
        &nbsp;
        <a href={`mailto:${author.email}`}>{author.name}</a>
        <AuthorPhoto fixed={author.photo.fixed} />
      </span>
      <span>
        <Date size={iconSize} />
        &nbsp;
        {date}
      </span>
      <span>
        <Timer size={iconSize} />
        &nbsp; Länge: {body.remark.timeToRead} min
      </span>
    </Meta>
    {!inTitle && (
      <div>
        <Tags size="1em" />
        &nbsp;
        <span>Tags: </span>
        {tags.map(({ title, slug }, index) => (
          <Fragment key={slug}>
            {index > 0 && `, `}
            {title}
          </Fragment>
        ))}
      </div>
    )}
  </>
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
