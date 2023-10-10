import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout"
import Modal from "../components/gallery/modal"
import Seo from "../components/seo"
import { graphql } from "gatsby"

import { ImageList, ImageListItem } from "@mui/material"
import "../styles/galley.module.css"

export default ({ data, location }) => {
  const dispPerLength = 25
  const [currentPhotoMaxLength, setCurrentPhotoMaxLength] =
    useState(dispPerLength)
  const [show, setShow] = useState(false)
  const [modalPhoto, setModalPhoto] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const loadMoreRef = useRef()

  const showModal = (node, i) => {
    setShow(true)
    setPhotoIndex(i)
    setModalPhoto(node)
  }

  const [windowWidth, setWindowWidth] = useState(null)
  const colsValue = windowWidth ? (windowWidth <= 768 ? 3 : 4) : 4

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setCurrentPhotoMaxLength(prevLength => prevLength + dispPerLength)
      }
    })

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [])

  return (
    <div className="aaaaaaa">
      <Seo title="ギャラリー" />
      <ImageList
        variant="masonry"
        id="photo-galleries"
        cols={colsValue}
        gap={8}
      >
        {data.photos.nodes.slice(0, currentPhotoMaxLength).map((node, i) => (
          <ImageListItem className="photo-gallery" key={node.id}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                showModal(node, i)
              }}
            >
              <img
                className="photo-gallery-image"
                src={`${node.photo.url}?w=248&fit=crop&auto=format`}
                srcSet={`${node.photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </a>
          </ImageListItem>
        ))}
        {currentPhotoMaxLength < data.photos.nodes.length && (
          <div ref={loadMoreRef} style={{ height: "20px", margin: "10px" }}>
            Loading more images...
          </div>
        )}
      </ImageList>
      <Modal
        show={show}
        setShow={setShow}
        node={modalPhoto}
        photoIndex={photoIndex}
        slideNode={index => {
          setPhotoIndex(index)
          setModalPhoto(data.photos.nodes[index])
        }}
        maxIndex={data.photos.nodes.length}
      />
    </div>
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
