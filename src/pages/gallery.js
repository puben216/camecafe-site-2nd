import React, { useState, useEffect } from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Modal from "../components/gallery/modal"
import Seo from "../components/seo"
import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Masonry } from "@mui/lab"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"

export default ({ data, location }) => {
  const [show, setShow] = useState(false)
  const [modalPhoto, setModalPhoto] = useState(false)
  const showModal = node => {
    console.log(node, "bbbbbbbbb")
    setShow(true)
    setModalPhoto(node)
  }
  const GatsbyImages = data.photos.nodes.map(node => {
    return (
      <ImageListItem key={node.id}>
        <a href="#" onClick={() => showModal(node)}>
          <img
            src={`${node.photo.url}?w=248&fit=crop&auto=format`}
            srcSet={`${node.photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </a>
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
      <Modal show={show} setShow={setShow} node={modalPhoto} />
      <br />
      <br />
      <br />
    </Layout>
  )
}

export const query = graphql`
  query {
    photos: allMicrocmsPhotos(sort: { fields: shoot_date }) {
      nodes {
        id
        shoot_date
        title
        photo {
          url
          height
          width
        }
      }
    }
  }
`
