import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import parse from "html-react-parser"

import "../styles/index.css"

export const query = graphql`
  query {
    allMicrocmsBlog(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        id
        category
        title
        content
        subtitle
        place
        date
        samne {
          url
          height
          width
        }
      }
    }
    allMicrocmsInfomation(
      limit: 4
      filter: { date: { gt: "20221001" } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        endtime
        date
        createdAt
        content
        place
        starttime
        title
        type
        main_image {
          height
          url
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
    const dateObject = new Date(blog.date)
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1 // JavaScriptの月は0から始まるため
    const day = dateObject.getDate()
    return (
      <div className="detail" key={blog.id}>
        <Link to={`/blog/${blog.id}`}>
          <h4>
            {year}年{month}月{day}日
          </h4>
          <h4>{blog.title}</h4>
          <figure className="blog-image-thumbnail">{image}</figure>
          <h4>{blog.place}</h4>
          <p>{blog.subtitle}</p>
        </Link>
      </div>
    )
  })

  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
  const day = ("0" + currentDate.getDate()).slice(-2)
  const formattedDate = year.toString() + month.toString() + day.toString()
  const informations = data.allMicrocmsInfomation.nodes.map(blog => {
    let image = null
    if (blog.main_image) {
      const infomationDate = new Date(blog.date)
      const formatter = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      const formattedInfomationDate = formatter.format(infomationDate)
      // お知らせバーのhtmlを作成。内容はサムネ、タイトル、日付
      image = (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <img
            src={blog.main_image.url}
            alt="サムネイル画像"
            className="circle-thumbnail me-3"
          />
          <div className="announcement-text d-flex w-100 justify-content-between">
            <div className="announcement-title">{blog.title}</div>
            <div className="announcement-date">{formattedInfomationDate}</div>
          </div>
        </a>
      )
    }
    return (
      <Link to={`/event/${blog.id}`} key={blog.id}>
        {image}
      </Link>
    )
  })

  return (
    <div>
      <div className="aaaaaaa">
        <Seo title="トップページ" pagetitle="カメカフェのトップページ" />
        <section className="hero">
          <figure></figure>
          <div className="catch">
            <h1>カメカフェ</h1>
            <p>東京を中心に活動する初心者向け写真・カメラサークル</p>
          </div>
        </section>
        <section className="food">
          <div className="container">
            <h2 className="bar">お知らせ</h2>
            <div class="announcement-list mb-12 mt-12">{informations}</div>
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
      </div>
    </div>
  )
}
