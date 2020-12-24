import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
const ComponentName = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Link to="/products" style={{ textDecoration: "none" }}>
          Back To Product
        </Link>
        <h1>single Product:{title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulBlogPost(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
