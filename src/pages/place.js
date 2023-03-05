import React, { Component } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import User from "../components/place/user"

export default () => {
  return (
    <Layout>
      <Seo title="Page two" />
      ccc
      <User options={[]} />
      <br />
      <br />
      <br />
    </Layout>
  )
}
