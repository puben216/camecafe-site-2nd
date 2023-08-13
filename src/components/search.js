// components/Search.js
import React, { useState } from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

function Hit({ hit }) {
  return (
    <article>
      <p>{hit.title}</p>
      <p>
        <Highlight attribute="date" hit={hit} />
      </p>
      <p>
        <Highlight attribute="content" hit={hit} />
      </p>
      <p>{hit.place}</p>
    </article>
  )
}

export default () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Search</button>

      {isModalOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button onClick={() => setModalOpen(false)}>Close</button>

            <InstantSearch searchClient={searchClient} indexName="Blogs">
              <SearchBox autoFocus />
              <div style={innerModalStyle}>
                <Hits hitComponent={Hit} />
              </div>
            </InstantSearch>
          </div>
        </div>
      )}
    </div>
  )
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)", // グレーのオーバーレイ
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
}

const modalStyle = {
  width: "800px",
  height: "80%",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
}

const innerModalStyle = {
  width: "800px",
  maxHeight: "80%",
  overflowX: "hidden",
  whiteSpace: "normal",
  overflowY: "auto", // スクロール可能にする
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
}
