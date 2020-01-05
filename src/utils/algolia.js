const queryTemplate = (type, fields = ``) => `{
  items: allContentful${type} {
    edges {
      node {
        objectID: id
        slug
        title
        body {
          remark: childMarkdownRemark {
            excerpt(pruneLength: 5000)
            headings {
              value
              depth
            }
          }
        }
        ${fields}
      }
    }
  }
}`

const postFields = `
  date(formatString: "MMM DD, YYYY")
  author {
    name
    email
  }
  tags {
    title
    slug
  }
`

const flatten = arr =>
  arr.map(({ node: { body, slug, ...rest } }) => ({
    ...(body && body.remark),
    slug: (`/` + slug).replace(`//`, `/`),
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: queryTemplate(`Page`),
    transformer: res => flatten(res.data.items.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: queryTemplate(`Post`, postFields),
    transformer: res => flatten(res.data.items.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
