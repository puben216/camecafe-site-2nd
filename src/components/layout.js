import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

import { OutboundLink } from "gatsby-plugin-google-analytics"

config.autoAddCss = false

export default ({ children }) => (
  <div>
    
    <OutboundLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/">
      Visit the Google Analytics plugin page!
    </OutboundLink>

    <Header />

    {children}

    <Footer />
  </div>
)
