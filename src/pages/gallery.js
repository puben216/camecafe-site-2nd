import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo" 
import { graphql } from "gatsby"
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import StackGrid from "react-stack-grid"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image"




export default ({ data, location }) => {
  const GatsbyImages = data.about.edges.map(({node}) => {
    return (
      <div>
        <GatsbyImage image={getImage(node.childImageSharp)} alt="" />
      </div>
    )
  })
  const hello = function(params) {
    console.log('heeeloo');
  }

  return (
    <Layout>
      <Seo title="Page two" />
      <div className="gallery-height">
        <StackGrid
          columnWidth={200}
          onLayout={hello}>
          {GatsbyImages}
        </StackGrid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: allFile {
    edges {
      node {
        id
        absolutePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
