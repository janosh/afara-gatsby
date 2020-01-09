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
    date(formatString: "MMM D, YYYY", locale: "de")
    body {
      remark: childMarkdownRemark {
        html
        timeToRead
        excerpt
      }
    }
    cover {
      ...fluid
    }
  }
`
