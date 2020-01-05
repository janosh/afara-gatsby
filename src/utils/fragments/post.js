import { graphql } from 'gatsby'

export const query = graphql`
  fragment postFields on ContentfulPost {
    slug
    title
    author {
      name
      email
      photo {
        fixed(width: 100) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
    tags {
      title
      slug
    }
    date(formatString: "MMM D, YYYY")
    body {
      remark: childMarkdownRemark {
        html
        timeToRead
        excerpt
      }
    }
    cover {
      title
      fluid(quality: 100, maxWidth: 1500) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
