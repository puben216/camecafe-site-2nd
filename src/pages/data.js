import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PieChartComponent from "../components/graph/PieChartComponent"
import { Card, Row, Col } from "react-bootstrap"

export default ({ data }) => {
  const colorCodeList = getColorCodeList()
  let prefectures = {}
  let municipalities = {}
  data.allMicrocmsBlog.nodes.map((blog, i) => {
    blog.prefectures?.map(
      (prefecture, i) =>
        (prefectures[prefecture] = prefectures[prefecture]
          ? prefectures[prefecture] + 1
          : 1)
    )
    blog.municipality?.map(
      (municipality, i) =>
        (municipalities[municipality] = municipalities[municipality]
          ? municipalities[municipality]++
          : 1)
    )
  })

  const prefectureData = {
    labels: Object.keys(prefectures),
    datasets: [
      {
        data: Object.values(prefectures),
        backgroundColor: colorCodeList,
        hoverBackgroundColor: colorCodeList,
      },
    ],
  }
  const municipalityData = {
    labels: Object.keys(municipalities),
    datasets: [
      {
        data: Object.values(municipalities),
        backgroundColor: colorCodeList,
        hoverBackgroundColor: colorCodeList,
      },
    ],
  }
  console.log(prefectureData, municipalityData)
  const options = {
    responsive: true,
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "サンプル円グラフ",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  }
  return (
    <Layout>
      <Seo title="データで見る写真・カメラサークル「カメカフェ」" />

      <div id="data_container" className="container mt-8">
        <Row className="tte">
          <h3>過去に撮影会を行った場所の情報</h3>
        </Row>
        <Row className="tte">
          <p>都道府県</p>
        </Row>
        <Row className="tte">
          <PieChartComponent data={prefectureData} options={options} />
        </Row>
        <Row className="tte">
          <p>市区町村</p>
        </Row>
        <Row className="tte">
          <PieChartComponent data={municipalityData} options={options} />
        </Row>
      </div>
    </Layout>
  )
}

function getColorCodeList() {
  return [
    "#36A2EB",
    "#FF6384",
    "#FFCE56",
    "#4BC0C0",
    "#FF9999",
    "#C9CBCF",
    "#AC92EC",
    "#5DADE2",
    "#58D68D",
    "#F7DC6F",
    "#F39C12",
    "#D35400",
    "#16A085",
    "#3498DB",
    "#8E44AD",
    "#95A5A6",
    "#E74C3C",
    "#2ECC71",
    "#34495E",
    "#E9573F",
    "#D870AD",
    "#967ADC",
    "#4FC1E9",
    "#A0D468",
    "#434A54",
    "#3BAFDA",
    "#37BC9B",
    "#F6BB42",
    "#E9573E",
    "#D77FA3",
  ]
}

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: date, order: DESC }) {
      nodes {
        id
        category
        title
        content
        subtitle
        date
        longitude
        latitude
        place
        steps
        prefectures
        municipality
        samne {
          url
          height
          width
        }
      }
    }
  }
`
