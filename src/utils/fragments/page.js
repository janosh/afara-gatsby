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
      ...fluid
    }
    slideshow {
      slides {
        ...fluid
      }
    }
    options {
      titleHeight
      showToc
    }
    updatedAt(formatString: "D. MMM YYYY", locale: "de")
  }
`
