import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

import { OutboundLink } from "gatsby-plugin-google-gtag"
import "bootstrap/dist/css/bootstrap.min.css"

config.autoAddCss = false

export const Head = () => (
  <>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Page two | 写真サークル｜カメカフェ</title>
    <meta
      name="description"
      content="カメラサークル「カメカフェ」のサイト。首都圏を中心に撮影会を行い、カメラ、写真を通じた交流の場を作ることを目標に活動しています。このサイトはその活動の経験や、過程で学んだスポットや技術等を共有しています。"
    />
    <meta content="カメラサークル「カメカフェ」のサイト。首都圏を中心に撮影会を行い、カメラ、写真を通じた交流の場を作ることを目標に活動しています。このサイトはその活動の経験や、過程で学んだスポットや技術等を共有しています。" />
    <meta name="twitter:creator" content="@カメカフェ" />
    <meta
      name="twitter:description"
      content="カメラサークル「カメカフェ」のサイト。首都圏を中心に撮影会を行い、カメラ、写真を通じた交流の場を作ることを目標に活動しています。このサイトはその活動の経験や、過程で学んだスポットや技術等を共有しています。"
    />
  </>
)

export default ({ children }) => (
  <div>
    <Header />
    <OutboundLink href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-gtag/"></OutboundLink>

    {children}

    <Footer />
  </div>
)
