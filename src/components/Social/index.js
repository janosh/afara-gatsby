import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, Container, Toggle, Link, Icons } from "./styles"

const Social = ({ social, size = `1em`, collapse, linkStyle }) => {
  return (
    <Wrapper>
      {collapse && <Toggle {...{ size, styles: linkStyle }} />}
      <Container collapse={collapse}>
        {social.map(({ node }) => {
          const Icon = Icons[node.icon]
          return (
            <Link key={node.title} href={node.url} styles={linkStyle}>
              <Icon size={size} />
            </Link>
          )
        })}
      </Container>
    </Wrapper>
  )
}

const query = graphql`
  {
    social: allContentfulSocial {
      social: edges {
        node {
          title
          url
          icon
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Social {...data.social} {...props} />}
  />
)
