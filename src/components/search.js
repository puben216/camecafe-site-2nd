import React, { useState, useEffect } from "react"
import algoliasearch from "algoliasearch/lite"
import { Row, Col } from "react-bootstrap"
import { BsSearch } from "react-icons/bs"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Snippet,
  connectStateResults,
  RefinementList,
  Panel,
} from "react-instantsearch-dom"
import { Link } from "gatsby"
import { useSearchBox } from "react-instantsearch"

import "../styles/search.css"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
)

function Hit({ hit }) {
  return (
    <Link to={`/blog/${hit.objectID}`}>
      <div className="hit-link">
        <p>
          <Highlight attribute="title" hit={hit} />
        </p>
        <p>
          <Highlight attribute="date" hit={hit} />
        </p>
        <p>
          <Snippet attribute="content" hit={hit} tagName="mark" />
        </p>
        <p>{hit.place}</p>
      </div>
    </Link>
  )
}

const Results = connectStateResults(({ searchState }) => {
  return searchState && searchState.query ? <Hits hitComponent={Hit} /> : null
})

export default () => {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div>
      <BsSearch onClick={() => setModalOpen(true)} />

      {isModalOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <InstantSearch searchClient={searchClient} indexName="Blogs">
              <SearchBox placeholder="Search" autoFocus />
              <button onClick={() => setModalOpen(false)}>Close</button>
              <div style={innerModalStyle}>
                <Results />
              </div>
            </InstantSearch>
          </div>
        </div>
      )}
    </div>
  )
}

function CustomSearchBox() {
  const { currentRefinement, isSearchStalled, refine } = useSearchBox()

  return (
    <div>
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        placeholder="Search for products..."
      />
      {isSearchStalled && <span>Searching...</span>}
    </div>
  )
}

const searchBarStyle = {
  display: "flex",
  justifyContent: "space-between", // コンテンツの間にスペースを確保
  alignItems: "center", // 中央に配置
  width: "100%", // 横幅を最大に
  marginBottom: "20px", // 下のコンテンツとの間隔
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
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
}
