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
  // const title = data.site.siteMetadata.title
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

// const Header = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           data
//           person {
//             name
//             age
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <h2>{data.site.siteMetadata.person.age}</h2>
//     </div>
//   )
// }

//export default Header
