import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <header className="header">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faCamera} />camecafe
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/`}>TOP</Link>
          </li>
          <li>
            <Link to={`/about/`}>ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
