import React from "react"
import { Link } from "gatsby"

const LinkWrapper = ({ crumbLabel, href, ...rest }) => {
  if (crumbLabel === "home") {
    href = "/"
  }
  return <Link to={href} {...rest} />
}

export default LinkWrapper
