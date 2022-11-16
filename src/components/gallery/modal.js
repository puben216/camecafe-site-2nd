import React from "react"

export default ({ show, setShow, node }) => {
  console.log(show, "cccccccc", node)
  const closeModal = () => {
    setShow(false)
  }
  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={e => e.stopPropagation()}>
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
