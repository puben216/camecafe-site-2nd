import React from "react"

import "../../styles/galley.modal.css"

const Modal = ({ show, setShow, node, photoIndex, slideNode, maxIndex }) => {
  const handleModalClick = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const halfWidth = rect.width / 2
    if (e.clientX - rect.left < halfWidth) {
      if (photoIndex > 0) {
        slideNode(photoIndex - 1)
      }
    } else {
      if (photoIndex < maxIndex - 1) {
        slideNode(photoIndex + 1)
      }
    }
  }

  return show ? (
    <div className="modalOverlay" onClick={() => setShow(false)}>
      <div
        className="modalContent"
        onClick={e => e.stopPropagation()}
        onPointerDown={handleModalClick}
      >
        <img
          src={node.photo.url}
          alt={node.title}
          style={{ background: "grey" }} // 余白をグレー色にするためのスタイル
        />
      </div>
    </div>
  ) : null
}

export default Modal
