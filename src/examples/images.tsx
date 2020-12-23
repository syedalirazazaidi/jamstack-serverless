import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import img from "../images/img1.jpeg"
import "../components/layout.css"
const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img2.jpeg" }) {
      childImageSharp {
        fixed(width: 390, height: 265) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img3.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic Image</h3>
        <img src={img} alt="image" width="100%" />
      </article>
      <article className=" single-image">
        <h3>fixedImage Image</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className=" single-image">
        <h3>fluid Image</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

// export default ComponentName
