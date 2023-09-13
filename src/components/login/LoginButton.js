import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return !isAuthenticated && <a onClick={loginWithRedirect}>LOGIN</a>
}

export default LoginButton
