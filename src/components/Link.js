import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, ...rest}) => (
  to.startsWith('/')
    ? <GatsbyLink to={to} {...rest}>{children}</GatsbyLink>
    : <a {...rest} href={to}>{children}</a>
)

export default Link