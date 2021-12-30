import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

import { OutboundLink } from "gatsby-plugin-google-gtag"


config.autoAddCss = false

export default ({ children }) => (
  <div>
    
    <Header />
    <OutboundLink href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-gtag/">
    </OutboundLink>

    {children}

    <Footer />
  </div>
)
