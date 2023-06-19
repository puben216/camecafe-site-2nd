import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

export default () => (
  <header className="header">
    <div className="conta iner">
      <div className="site">
        <Link to={`/`}>
          <FontAwesomeIcon icon={faCamera} />
          camecafe
        </Link>

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
              <NavDropdown title="BLOG" id="nav-dropdown">
                <NavDropdown.Item href="">
                  <Link to={`/blog/event`}>event </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to={`/blog/submenu2`}>photo</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">
                <Link to={`/login/`}>LOGIN</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  </header>
)
