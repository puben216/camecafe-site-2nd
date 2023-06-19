import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faLine,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "pattern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data, "aaaaa")
  return (
    <footer className="footer">
      <div className="container">
        <div className="site">
          <Link to={`/`}>
            <StaticImage
              src="../images/ca.jpg"
              alt=""
              style={{
                width: "225.65px",
                height: "46.59px",
              }}
            />
            <p>Since　2019</p>
          </Link>
        </div>
        <ul className="sns">
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSctxGl_6d6HZ_cjSE6HSsA0fmcofHIT4rZSw4fhvmlm1yUSOw/viewform">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
          <li>
            <a href="https://lin.ee/oEWkl4c">
              <FontAwesomeIcon icon={faLine} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/camecafe_circle__.2nd/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="back">
        <Img
          fluid={data.pattern.childImageSharp.fluid}
          alt=""
          style={{ height: "100%" }}
        />
      </div>
    </footer>
  )
}
