import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  PieChartComponent,
  LineChartComponent,
} from "../components/graph/chartComponent"
import { Card, Row, Col } from "react-bootstrap"

export default ({ data }) => {
  const colorCodeList = getColorCodeList()
  let prefectures = {}
  let municipalities = {}
  let yearMonths = {}
  let days = {}
  let checkDate = {}
  let currentDate = new Date(2021, 11, 1) // 月は0から始まるため、11は12月を意味する
  let startTimePeriods = {}
  let endTimePeriods = {}
  let tmpStartPeriod = null

  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"]
  const weekDayValues = [...Array(weekDays.length)].map(() => 0)
  const timePeriodLabels = ["朝", "昼", "夜"]
  const shootTimePeriodLabels = {
    60: "~60",
    120: "~120",
    180: "~180",
    240: "~240",
    241: "241~",
  }
  const shootTimePeriods = Object.keys(shootTimePeriodLabels).reduce(
    (acc, label) => {
      acc[label] = 0
      return acc
    },
    {},
  )

  while (
    currentDate.getFullYear() < currentYear ||
    (currentDate.getFullYear() === currentYear &&
      currentDate.getMonth() <= currentMonth)
  ) {
    yearMonths[`${currentDate.getFullYear()}/${currentDate.getMonth() + 1}`] = 0
    // 次の月に進む
    currentDate.setMonth(currentDate.getMonth() + 1)
  }
  console.log(data.allMicrocmsBlog.nodes)
  data.allMicrocmsBlog.nodes.map((blog, i) => {
    blog.prefectures?.map(
      (prefecture, i) =>
        (prefectures[prefecture] = prefectures[prefecture]
          ? prefectures[prefecture] + 1
          : 1),
    )
    blog.municipality?.map(
      (municipality, i) =>
        (municipalities[municipality] = municipalities[municipality]
          ? municipalities[municipality] + 1
          : 1),
    )

    let blogDate = new Date(blog.date)
    let yearMonth = `${blogDate.getFullYear()}/${blogDate.getMonth() + 1}`
    if (
      !checkDate[
        `${blogDate.getFullYear()}/${
          blogDate.getMonth() + 1
        }/${blogDate.getDate()}`
      ]
    ) {
      yearMonths[yearMonth] = yearMonths[yearMonth] + 1
      checkDate[
        `${blogDate.getFullYear()}/${
          blogDate.getMonth() + 1
        }/${blogDate.getDate()}`
      ] = true
    }

    weekDayValues[blogDate.getDay()]++
    console.log(blogDate)
    if (blog.start_time) {
      tmpStartPeriod = getTimePeriodFromString(blog.start_time)
      startTimePeriods[tmpStartPeriod] = startTimePeriods[tmpStartPeriod]
        ? startTimePeriods[tmpStartPeriod] + 1
        : 1
    }

    if (blog.end_time) {
      tmpStartPeriod = getTimePeriodFromString(blog.end_time)
      endTimePeriods[tmpStartPeriod] = endTimePeriods[tmpStartPeriod]
        ? endTimePeriods[tmpStartPeriod] + 1
        : 1
    }

    if (blog.start_time && blog.end_time) {
      let eventMinutes = calcMinutesBetweenTimeStrings(
        blog.start_time,
        blog.end_time,
      )
      if (eventMinutes <= 60) {
        shootTimePeriods[60]++
      } else if (eventMinutes <= 120) {
        shootTimePeriods[120]++
      } else if (eventMinutes <= 180) {
        shootTimePeriods[180]++
      } else if (eventMinutes <= 240) {
        shootTimePeriods[240]++
      } else {
        shootTimePeriods[241]++
      }
    }
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
  const weekDayData = {
    labels: Object.values(weekDays),
    datasets: [
      {
        data: Object.values(weekDayValues),
        backgroundColor: colorCodeList,
        hoverBackgroundColor: colorCodeList,
      },
    ],
  }
  const startTimePeriodData = {
    labels: Object.values(timePeriodLabels),
    datasets: [
      {
        data: Object.keys(startTimePeriods)
          .sort()
          .map(key => startTimePeriods[key]),
        backgroundColor: colorCodeList,
        hoverBackgroundColor: colorCodeList,
      },
    ],
  }
  const endTimePeriodData = {
    labels: Object.values(timePeriodLabels),
    datasets: [
      {
        data: Object.keys(endTimePeriods)
          .sort()
          .map(key => endTimePeriods[key]),
        backgroundColor: colorCodeList,
        hoverBackgroundColor: colorCodeList,
      },
    ],
  }
  const shootTimePeriodData = {
    labels: Object.values(shootTimePeriodLabels),
    datasets: [
      {
        data: Object.keys(shootTimePeriodLabels).map(
          key => shootTimePeriods[key],
        ),
        backgroundColor: colorCodeList,
        hoverBackgroundColor: colorCodeList,
      },
    ],
  }

  console.log(prefectureData, municipalityData)
  const circleOptions = {
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

  const lineData = {
    labels: Object.keys(yearMonths),
    datasets: [
      {
        label: "開催回数",
        data: Object.values(yearMonths),
        borderColor: ["#FF6384"],
        borderWidth: 2,
        fill: false,
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    legend: {
      position: "top",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <Layout>
      <Seo title="データで見る写真・カメラサークル「カメカフェ」" />

      <div id="data_container" className="container mt-8">
        <Row className="tte">
          <h3>過去に撮影会を行った場所の情報</h3>
          <Row className="tte">
            <p>都道府県</p>
          </Row>
          <Row className="tte">
            <PieChartComponent data={prefectureData} options={circleOptions} />
          </Row>
          <Row className="tte">
            <p>市区町村</p>
          </Row>
          <Row className="tte">
            <PieChartComponent
              data={municipalityData}
              options={circleOptions}
            />
          </Row>
        </Row>
        <Row className="tte">
          <h3>開催頻度</h3>
          <Row className="tte">
            <p></p>
          </Row>
          <Row className="tte">
            <LineChartComponent data={lineData} options={lineOptions} />
          </Row>
        </Row>
        <br />
        <Row className="tte">
          <h3>過去に撮影会を行った時間の情報</h3>
          <Row className="tte">
            <p>開始時間</p>
          </Row>
          <Row className="tte">
            <PieChartComponent
              data={startTimePeriodData}
              options={circleOptions}
            />
          </Row>
          <Row className="tte">
            <p>終了時間</p>
          </Row>
          <Row className="tte">
            <PieChartComponent
              data={endTimePeriodData}
              options={circleOptions}
            />
          </Row>
          <Row className="tte">
            <p>撮影時間（分）</p>
          </Row>
          <Row className="tte">
            <PieChartComponent
              data={shootTimePeriodData}
              options={circleOptions}
            />
          </Row>

          <Row className="tte">
            <p>曜日</p>
          </Row>
          <Row className="tte">
            <PieChartComponent data={weekDayData} options={circleOptions} />
          </Row>
        </Row>
      </div>
    </Layout>
  )
}

function getTimePeriodFromString(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number)

  if (hours >= 0 && hours < 12) {
    return 1 // "morning"
  } else if (hours >= 12 && hours < 18) {
    return 2 // "noon"
  } else {
    return 3 // "night"
  }
}

function calcMinutesBetweenTimeStrings(startTimeString, endTimeString) {
  const [startHours, startMinutes] = startTimeString.split(":").map(Number)
  const [endHours, endMinutes] = endTimeString.split(":").map(Number)

  const startMinutesTotal = startHours * 60 + startMinutes
  const endMinutesTotal = endHours * 60 + endMinutes

  return endMinutesTotal - startMinutesTotal
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
    allMicrocmsBlog(sort: { fields: date, order: ASC }) {
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
        start_time
        end_time
        samne {
          url
          height
          width
        }
      }
    }
  }
`
