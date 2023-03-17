import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Modal from "../components/gallery/modal"
import Seo from "../components/seo"
import { graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"

import "../styles/galley.module.css"

export default ({ data, location }) => {
  const [show, setShow] = useState(false)
  const [modalPhoto, setModalPhoto] = useState(false)
  const showModal = (node, i) => {
    console.log(node, "bbbbbbbbb", i)
    setShow(true)
    setModalPhoto(node)
  }
  const GatsbyImages = data.photos.nodes.map((node, i) => {
    return (
      <ImageListItem className="photo-gallery" key={node.id}>
        <a href="#" onClick={() => showModal(node, i)}>
          <img
            className="photo-gallery-image"
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
