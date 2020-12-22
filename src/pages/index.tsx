import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import { Button } from "../components/button"
export default function Home() {
  return (
    <Layout>
      <h1>hello from gatsby</h1>
      <Button>Click Me</Button>
    </Layout>
  )
}
