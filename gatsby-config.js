const queries = require(`./src/utils/algolia`)

require(`dotenv`).config()

const siteMetadata = {
  title: `Afara e.V.`,
  description: `Homepage for German non-profit Afara e.V.`,
  author: `Janosh Riebesell <janosh.riebesell@gmail.com>`,
  url: `https://afara.foundation`,
}

const plugins = [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images-contentful`,
          options: {
            maxWidth: 1200,
            linkImagesToOriginal: false,
            wrapperStyle: `
              border-radius: 0.5em;
              overflow: hidden;
            `,
          },
        },
        `gatsby-remark-embed-video`,
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: siteMetadata.title,
      display: `standalone`,
      icon: `src/assets/favicon.svg`,
      background_color: `#ecb517`,
      theme_color: `#ecb517`,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000, // default: 1000
    },
  },
]

module.exports = { siteMetadata, plugins }
