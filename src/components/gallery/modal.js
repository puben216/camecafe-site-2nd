import React from "react"

export default ({ show, setShow, node, next }) => {
  const closeModal = () => {
    setShow(false)
  }
  const nextModal = () => {
    next()
  }
  const getTerminalType = () => {
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
  let width = null
  if (getTerminalType() === 5) {
    width = node.photo.width < node.photo.height ? "40%" : "50%"
  } else {
    width = "100%"
  }
  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div
          id="content"
          style={{
            width: width,
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
