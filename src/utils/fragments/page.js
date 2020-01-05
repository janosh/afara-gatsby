import { graphql } from 'gatsby'

export const query = graphql`
  fragment pageFields on ContentfulPage {
    title
    subtitle {
      remark: childMarkdownRemark {
        excerpt
        html
      }
    }
    slug
    body {
      remark: childMarkdownRemark {
        excerpt
        html
      }
    }
    cover {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    slideshow {
      slides {
        title
        image {
          fluid(quality: 90, maxWidth: 1500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    titleHeight
  }
`
