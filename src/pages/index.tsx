import React from "react"

import { Link } from "gatsby"
export default function Home() {
  return (
    <div>
      <div>
        <h2>This is Home Page</h2>
      </div>
      <Link to="/about">Back to About Page</Link>
      <Link to="https://www.gatsbyjs.org">Gatsby Site</Link>
      my Home Page!
    </div>
  )
}
