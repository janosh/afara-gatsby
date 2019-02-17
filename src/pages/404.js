import React from "react"
import { graphql } from "gatsby"

import Page from "../templates/page"

const PageNotFound = props => <Page {...props} />

export default PageNotFound

export const query = graphql`
  {
    page: contentfulPage(slug: { eq: "404" }) {
      ...pageFields
    }
  }
`
