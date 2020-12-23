import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default function Header() {
  const {
    site: {
      info: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>
        title: {title}
        name: {name}
        age: {age}
        this is our heading{" "}
      </h1>
    </div>
  )
}
