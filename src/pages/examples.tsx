import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"
export default function examples({ data }) {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      Example Page
      <Header />
      <HeaderStatic />
      <h5>
        <b>author:{author}</b>
      </h5>
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
        }
      }
    }
  }
`
