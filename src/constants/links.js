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
      url: "/projectsJson/",
      text: "projectsJson",
    },
    {
      id: 3,
      url: "/project/",
      text: "project-md",
    },
    {
      id: 4,
      url: "/blog/",
      text: "blog",
    },
    {
      id: 5,
      url: "/about/",
      text: "about",
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
