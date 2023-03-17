import React from "react"

export default ({ show, setShow, node, photoIndex, slideNode, maxIndex }) => {
  const closeModal = () => {
    setShow(false)
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

  if (show) {
    let width = null
    if (getTerminalType() === 5) {
      width = node.photo.width < node.photo.height ? "40%" : "50%"
    } else {
      width = "100%"
    }
    return (
      <div id="overlay" onClick={closeModal}>
        <div
          id="content"
          style={{
            width: width,
            height: node.photo.width < node.photo.height ? "70%" : "50%",
            position: "relative",
          }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header"></div>
          <img src={node.photo.url} />
          {photoIndex > 1 && (
            <div
              style={{
                width: "50%",
                height: "90%",
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
              }}
              className="modal-before-btn"
              onClick={() => slideNode(--photoIndex)}
            ></div>
          )}
          {photoIndex < maxIndex - 1 && (
            <div
              style={{
                width: "50%",
                height: "90%",
                opacity: 0,
                position: "absolute",
                top: 0,
                right: 0,
              }}
              className="modal-next-btn"
              onClick={() => slideNode(++photoIndex)}
            ></div>
          )}
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
