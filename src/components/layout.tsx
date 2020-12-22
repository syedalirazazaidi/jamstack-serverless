import React, { ReactNode } from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import "./layout.css"
type LayoutProps = {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
