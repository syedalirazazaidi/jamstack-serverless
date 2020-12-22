import React from "react"
import Layout from "../components/layout"
import "../components/layout.css"
export default function blog() {
  return (
    <Layout>
      <h1>This is Blog Page</h1>
      <p className="blog-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis magni
        autem exercitationem earum excepturi placeat blanditiis voluptatibus
        illo voluptate consectetur quidem eveniet expedita magnam dolorum
        voluptates ex quod, consequuntur eius!
      </p>
    </Layout>
  )
}
