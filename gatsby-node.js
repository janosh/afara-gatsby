const path = require(`path`)

const pageTemplate = path.resolve(`./src/templates/page.js`)
const postTemplate = path.resolve(`./src/templates/post.js`)

const contentfulQuery = contentType => `
  {
    content: allContentful${contentType} {
      nodes {
        slug
      }
    }
  }
`

const pageSets = [
  [contentfulQuery(`Page`), pageTemplate],
  [contentfulQuery(`Post`), postTemplate],
]

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  await Promise.all(
    pageSets.map(async ([query, component]) => {
      const response = await graphql(query)
      if (response.errors) throw new Error(response.errors)
      response.data.content.nodes.forEach(({ slug }) => {
        createPage({ path: slug, component, context: { slug } })
      })
    })
  )
}

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `ContentfulPost`) node.slug = `/blog/` + node.slug
}

// Enable absolute imports from `src`.
// See https://gatsbyjs.org/docs/add-custom-webpack-config#absolute-imports.
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}
