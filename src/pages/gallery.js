import React, { useState, useEffect } from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Masonry } from "@mui/lab"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"

export default ({ data, location }) => {
  const GatsbyImages = data.about.edges.map(({ node }) => {
    return (
      <ImageListItem key={node.id}>
        <img
          src={`${node.publicURL}?w=248&fit=crop&auto=format`}
          srcSet={`${node.publicURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
          loading="lazy"
        />
      </ImageListItem>
    )
  })

  const getMasonryColumn = () => {
    let documentWindow = null
    if (typeof window !== `undefined`) {
      documentWindow = window
    } else {
      return 4
    }
    const { innerWidth: width } = documentWindow
    if (width < 700) {
      return 3
    } else if (width < 960) {
      return 4
    } else {
      return 5
    }
  }
  const [masonryColumn, setMasonryColumn] = useState(getMasonryColumn())
  useEffect(() => {
    const onResize = () => {
      setMasonryColumn(getMasonryColumn())
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <Layout>
      <Seo title="Page two" />
      <ImageList variant="masonry" cols={masonryColumn} gap={8}>
        {GatsbyImages}
      </ImageList>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: allFile {
      edges {
        node {
          id
          absolutePath
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
