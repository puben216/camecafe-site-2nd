import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { Navbar, Nav } from "react-bootstrap"

export default () => (
  <header className="header">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faCamera} />
          camecafe
        </Link>
      </div>
      <Navbar collapseOnSelect expand="sm" bg="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">
              <Link to={`/about/`}>ABOUT</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={`/gallery/`}>GALLERY</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={`/contact/`}>CONTACT</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={`/faq/`}>FAQ</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={`/login/`}>LOGIN</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)
