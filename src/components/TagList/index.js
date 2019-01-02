import React from 'react'
import PropTypes from 'prop-types'

import { TagContainer, List, TagIcon, TagLink } from './styles'

const Tag = ({ title, slug, icon }) => (
  <TagLink activeClassName="active" to={`/blog/` + slug}>
    {icon && <TagIcon src={icon.file.url} alt={icon.title} />}
    {title}
  </TagLink>
)

const TagList = ({ title, tags }) => (
  <TagContainer>
    <h1>{title}</h1>
    <List>
      {tags.map(({ node }) => (
        <Tag key={node.slug} {...node} />
      ))}
    </List>
  </TagContainer>
)

export default TagList

TagList.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
      }),
    })
  ).isRequired,
}

TagList.defaultProps = {
  title: `Tags`,
}
