import React from "react"

export default ({ show, setShow, node }) => {
  const closeModal = () => {
    setShow(false)
  }
  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div
          id="content"
          style={{
            width: node.photo.width < node.photo.height ? "40%" : "50%",
            height: node.photo.width < node.photo.height ? "70%" : "50%",
          }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header"></div>
          <img src={node.photo.url} />
          <button className="modal-close-btn" onClick={closeModal}>
            とじる
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}
