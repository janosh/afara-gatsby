const queryTemplate = (type, fields = ``) => `{
  items: allContentful${type} {
    nodes {
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
}`

const postFields = `
  date(formatString: "MMM DD, YYYY", locale: "de")
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
  arr.map(({ body, slug, ...rest }) => ({
    ...body?.remark,
    slug: (`/` + slug).replace(`//`, `/`),
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: queryTemplate(`Page`),
    transformer: res => flatten(res.data.items.nodes),
    indexName: `Pages`,
    settings,
  },
  {
    query: queryTemplate(`Post`, postFields),
    transformer: res => flatten(res.data.items.nodes),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries
