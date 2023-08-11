import React, { useState, useEffect, useRef } from "react"

import "../../styles/galley.modal.css"

const Modal = ({ show, setShow, node, photoIndex, slideNode, maxIndex }) => {
  let startX = 0

  const slideRight = () => {
    if (photoIndex < maxIndex - 1) {
      slideNode(photoIndex + 1)
    }
  }

  const slideLeft = () => {
    if (photoIndex > 0) {
      slideNode(photoIndex - 1)
    }
  }

  const handleTouchStart = event => {
    startX = event.touches[0].clientX
  }

  const handleTouchEnd = event => {
    const endX = event.changedTouches[0].clientX
    const diffX = startX - endX

    if (diffX > 50) {
      // 右にスワイプ
      slideLeft()
    } else if (diffX < -50) {
      // 左にスワイプ
      slideRight()
    }
  }

  const handleModalClick = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const halfWidth = rect.width / 2
    if (e.clientX - rect.left < halfWidth) {
      slideLeft()
    } else {
      slideRight()
    }
  }

  useEffect(() => {
    const handleKeyDown = event => {
      switch (event.keyCode) {
        case 37: // 左の矢印キー
          console.log("mmmm")
          slideLeft()
          break
        case 39: // 右の矢印キー
          console.log("nnnn")
          slideRight()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [photoIndex])

  return show ? (
    <div
      className="modalOverlay"
      onClick={() => setShow(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="modalContent"
        onClick={e => e.stopPropagation()}
        onPointerDown={handleModalClick}
      >
        <img
          src={node.photo.url}
          alt={node.title}
          style={{ background: "grey" }} // 余白をグレー色にするためのスタイル
          onselectstart={() => false}
          onmousedown={() => false}
        />
      </div>
    </div>
  ) : null
}

export default Modal
