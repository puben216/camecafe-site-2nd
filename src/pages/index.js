import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import parse from "html-react-parser"

export const query = graphql`
  query {
    allMicrocmsBlog(limit: 3, sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        category
        title
        content
        samne {
          url
          height
          width
        }
      }
    }
  }
`

export default ({ data }) => {
  console.log(data)
  console.log("blogs")
  const newsQuery = data.allMicrocmsBlog.nodes

  const blogs = data.allMicrocmsBlog.nodes.map(blog => {
    let image = null
    if (blog.samne) {
      image = <img src={blog.samne.url} alt="" />
    } else {
      image = <StaticImage src="../images/noimage2.jpg" alt="no image" />
    }
    console.log(image)
    console.log("(image)")
    return (
      <div className="detail" key={blog.id}>
        <h3>{blog.title}</h3>
        <figure>{image}</figure>
        <p>{blog.subtitle}</p>
        <p>{parse(blog.content.substring(0, 140))}</p>
      </div>
    )
  })

  let news = []
  for (let i = 0; i < 3 && i < newsQuery.length; i++) {
    news.push(<div className="detail"></div>)
  }

  return (
    <div>
      <Layout>
        <section className="hero">
          <figure></figure>
          <div className="catch">
            <h1>カメカフェ</h1>
            <p>東京を中心に活動する初心者向けカメラサークル</p>
          </div>
        </section>
        <section className="food">
          <div className="container">
            <h2 className="bar">お知らせ</h2>
            <div className="details">{news}</div>
          </div>
        </section>

        <section className="food">
          <div className="container">
            <h2 className="bar">
              新着 <span></span>
            </h2>
            <div className="details">{blogs}</div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
