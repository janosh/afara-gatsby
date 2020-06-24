import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Tags } from 'styled-icons/fa-solid'
import { Calendar } from 'styled-icons/octicons'
import { connectHits } from 'react-instantsearch-dom'

const postHit = hit => (
  <div>
    <Calendar size="1em" />
    &nbsp;
    <Highlight attribute="date" hit={hit} tagName="mark" />
    &emsp;
    <Tags size="1em" />
    &nbsp;
    {hit.tags.map((tag, index) => (
      <Fragment key={tag.slug}>
        {index > 0 && `, `}
        {tag.title}
      </Fragment>
    ))}
  </div>
)

export default connectHits(function HitComp({ type, hits, onClick }) {
  const extend = { postHit }[type]
  return hits.map(hit => (
    <div key={hit.objectID}>
      <Link to={hit.slug} onClick={onClick}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      {extend && extend(hit)}
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  ))
})
