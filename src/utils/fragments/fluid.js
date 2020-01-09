import { graphql } from 'gatsby'

export const query = graphql`
  fragment fluid on ContentfulAsset {
    title
    alt: description
    fluid {
      ...GatsbyContentfulFluid_withWebp
    }
  }
`
