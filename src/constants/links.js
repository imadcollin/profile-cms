import { Link } from "gatsby"
import React from "react"

const Links = () => {
  const links = [
    {
      id: 1,
      url: "/",
      text: "home",
    },
    {
      id: 2,
      url: "/projects/",
      text: "projects",
    },
    {
      id: 3,
      url: "/contributors/",
      text: "contributors",
    },
    {
      id: 4,
      url: "/blog/",
      text: "blog",
    },
  ]
  return (
    <div>
      {links.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Links
