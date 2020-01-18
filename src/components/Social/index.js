import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SocialRoot, Div, Toggle, Link, Icons } from './styles'

export default function Social({ size = `1em`, collapse, linkStyle }) {
  const { social } = useStaticQuery(graphql`
    {
      social: contentfulJson(title: { eq: "Social" }) {
        data {
          Facebook
          Instagram
        }
      }
    }
  `)
  return (
    <SocialRoot>
      {collapse && <Toggle {...{ size, styles: linkStyle }} />}
      <Div collapse={collapse}>
        {Object.keys(social.data).map(key => {
          const Icon = Icons[key]
          return (
            <Link key={key} href={social.data[key]} styles={linkStyle}>
              <Icon size={size} />
            </Link>
          )
        })}
      </Div>
    </SocialRoot>
  )
}
