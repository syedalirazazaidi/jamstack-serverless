import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import "../components/layout.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Images } from "../examples/images"

const ComponentName = ({ data }) => {
  const {
    allContentfulBlogPost: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>
                {product.price}
                <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more detail</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default ComponentName

// export default function products() {
//   return (
//     <Layout>
//       <div className={styles.page}>
//         <h1>Our Products</h1>
//         <p className={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis magni
//           autem exercitationem earum excepturi placeat blanditiis voluptatibus
//           illo voluptate consectetur quidem eveniet expedita magnam dolorum
//           voluptates ex quod, consequuntur eius!
//         </p>
//       </div>
//     </Layout>
//   )
// }
