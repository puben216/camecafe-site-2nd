import React, { useState, useEffect, useRef } from "react"

import "../../styles/galley.modal.css"

const Modal = ({ show, setShow }) => {
  return show ? (
    <div
      className="modalOverlay"
      mouseover={() => false}
      onClick={() => setShow(false)}
    >
      <div className="modalContent">
        <h2>bbbbb</h2>
      </div>
    </div>
  ) : null
}

export default Modal
