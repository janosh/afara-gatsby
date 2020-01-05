/* eslint-disable no-console */
const contentful = require(`contentful-management`)
require(`dotenv`).config()

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

client
  .getSpace(process.env.CONTENTFUL_SPACE_ID)
  .then(space => space.getEnvironment(`master`))
  .then(env => env.getEntries())
  .then(response =>
    response.items.filter(item => item.fields.slug && item.fields.slug.de)
  )
  // .then(items => items.map(item => item.fields.slug))
  .then(items =>
    items.forEach(item => {
      const slug = item.fields.slug.de
      if (slug !== `/` && slug.startsWith(`/`)) {
        item.fields.slug.de = slug.substr(1)
        item.update()
        return item.publish()
      }
    })
  )
  .then(console.log)
  .catch(console.error)
