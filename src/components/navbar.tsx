import React from "react"
import { Link } from "gatsby"
type HeaderProps = {
  text?: string
  subtext?: string
}
export default function Navbar({ text, subtext }: HeaderProps) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/examples">Examples Link</Link>
        </li>
        <li>
          <Link to="/images">My Images</Link>
        </li>
      </ul>
    </nav>
  )
}
