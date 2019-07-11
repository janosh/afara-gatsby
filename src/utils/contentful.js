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
  .then(items =>
    items.forEach(item => {
      item.fields.slug.de = (`/` + item.fields.slug.de).replace(`//`, `/`)
      item.update()
      return item.publish()
    })
  )
  .then(console.log)
  .catch(console.error)
