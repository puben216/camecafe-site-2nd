import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { navigate } from "gatsby"

import { Layout } from "./src/components/layout"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

const onRedirectCallback = appState => {
  // Use Gatsby's navigate method to replace the url
  //navigate(appState?.returnTo || "/", { replace: true })
  navigate("/", { replace: true })
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  )
}
