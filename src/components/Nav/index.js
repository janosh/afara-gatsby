import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useScreenQuery } from 'hooks'
import MobileNav from './Mobile'
import DesktopNav from './Desktop'
import { Link } from 'gatsby'

export const NavLink = props => (
  <Link activeClassName="active" partiallyActive {...props} />
)

export default function Nav(props) {
  const { nav } = useStaticQuery(graphql`
    {
      nav: contentfulJson(title: { eq: "Nav" }) {
        data {
          nav {
            url
            title
            subNav {
              url
              title
            }
          }
        }
      }
    }
  `)
  const mobile = useScreenQuery(`maxNetbook`)
  if (mobile) return <MobileNav {...nav.data} {...props} />
  // Only render DesktopNav if screen query is false.
  if (mobile === false) return <DesktopNav {...nav.data} {...props} />
  // Render nothing in SSR to avoid showing DesktopNav on mobile
  // on initial page load from cleared cache.
  return null
}
