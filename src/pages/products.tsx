import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import "../components/layout.css"

export default function products() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Our Products</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis magni
          autem exercitationem earum excepturi placeat blanditiis voluptatibus
          illo voluptate consectetur quidem eveniet expedita magnam dolorum
          voluptates ex quod, consequuntur eius!
        </p>
      </div>
    </Layout>
  )
}
