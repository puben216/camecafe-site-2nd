import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"

export const query = graphql`
  query {
    file(relativePath: {eq: "hero.jpg"}) {
      childrenImageSharp {
        fluid(maxWidth: 1600) {
          aspectRatio
          base64
          originalImg
          originalName
          presentationWidth
          presentationHeight
          sizes
        }
      }
    },
    allMicrocmsBlog(limit: 3, sort: {fields: createdAt, order: DESC}) {
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
/*
export const blogs = graphql`
  query {
    microcmsBlog(blogId: {}) {
      id
      content
      category
      title
    }
  }
`
*/

export default ({data}) => {
  console.log(data.allMicrocmsBlog.nodes)
  console.log('blogs')
  const newsQuery = data.allMicrocmsBlog.nodes;

  const blogs = data.allMicrocmsBlog.nodes.map((blog) => {
    const image = blog.samne ? blog.samne : {};
    console.log(image)
    console.log('(image)')
    return (
      <div className="detail" key={blog.id}>
        <h3>{blog.title}</h3>
        <figure>
          <img src={image.url} alt="" />
        </figure>
        <p>{blog.subtitle}</p>
        <p>{blog.content}</p>
      </div>
    )
  })

  /*
  blogs.push(
    <div className="detail">
      <figure>
        <img src="images/IMGP4909.JPG" alt="" />
      </figure>
      <h3>紅葉（本土寺）撮影会</h3>
      <p>Hondoji Temple</p>
      <p>紅葉を撮りに行きました。</p>
    </div>
  )
  */

  let news = [];
  for (let i = 0; i < 3 && i < newsQuery.length; i++) {
    news.push(
      <div className="detail">
      </div>
    )
  }
  
              
  return (
    <div>
      <Layout>
        <section className="hero">
          <figure>
          </figure>
          <div className="catch">
            <h1>カメカフェ</h1>
            <p>東京を中心に活動する初心者向けカメラサークル</p>
          </div>
        </section>
        <section className="food">
          <div className="container">
            <h2 className="bar">お知らせ</h2>
            <div className="details">
              {news}
            </div>
          </div>
        </section>

        <section className="food">
          <div className="container">
            <h2 className="bar">新着 <span></span></h2>
            <div className="details">
              {blogs}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}