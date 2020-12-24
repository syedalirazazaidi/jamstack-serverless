import React from "react"

import { graphql } from "gatsby"
const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulBlogPost(slug: { eq: $slug }) {
      title
      price
      image {
        fixed {
          src
        }
      }
    }
  }
`

export default ComponentName
