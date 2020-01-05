import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Links, Partners } from './styles'

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    {
      footer: contentfulJson(title: { eq: "Footer" }) {
        data {
          copyright
          donations
          links {
            url
            title
          }
          partnerTitle
          partners {
            title
            url
            img
          }
        }
        files {
          title
          fixed(width: 60) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  `)
  const { copyright, donations, links, partnerTitle, partners } = footer.data
  return (
    <Container>
      <span>
        © {new Date().getFullYear()} - {copyright}
      </span>
      <span
        css="grid-area: donations;"
        dangerouslySetInnerHTML={{ __html: donations }}
      />
      <Links>
        {links.map(({ url, title }) => (
          <Link key={url} to={url}>
            {title}
          </Link>
        ))}
      </Links>
      <Partners>
        <span css="grid-area: title">{partnerTitle}</span>
        {partners.map(({ title, url, img }) => (
          <Link key={title} to={url} title={title}>
            <Img
              alt={title}
              fixed={footer.files.find(file => file.title === img).fixed}
              css="border-radius: 0.5em;"
            />
          </Link>
        ))}
      </Partners>
    </Container>
  )
}
