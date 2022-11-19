import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

export default () => (
  <header className="header">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faCamera} />
          camecafe
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/about/`}>ABOUT</Link>
          </li>
          <li>
            <Link to={`/gallery/`}>GALLERY</Link>
          </li>
          <li>
            <Link to={`/contact/`}>CONTACT</Link>
          </li>
          <li>
            <Link to={`/faq/`}>FAQ</Link>
          </li>
          <li>
            <Link to={`/login/`}>LOGIN</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
