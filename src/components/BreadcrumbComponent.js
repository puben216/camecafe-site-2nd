import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const BreadcrumbComponent = ({ pageContext }) => {
  if (!pageContext.breadcrumb) {
    return null
  }

  return (
    <div className="breadcrumb-container">
      <div className="container">
        <Breadcrumb crumbs={pageContext.breadcrumb.crumbs} />
      </div>
    </div>
  )
}

export default BreadcrumbComponent
