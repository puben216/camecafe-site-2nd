import React from "react"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import "../../styles/announcement.css"
import { formatYmd } from "../../utils/helpers"

const Announcement = ({ event }) => {
  const blogDate = new Date(event.date)
  const formattedBlogDate = formatYmd(event.date)
  const currentDate = new Date()
  const formattedCurrentDate = formatYmd(currentDate)
  const renderFlag = () => {
    if (event.recruitment_flag === true && currentDate <= blogDate) {
      return <Badge bg="primary">募集中</Badge>
    } else {
      return <Badge bg="secondary">募集終了</Badge>
    }
  }

  const targetElements = event => {
    return (
      <>
        <Badge bg="success">20代</Badge>
        <Badge bg="info">30代</Badge>
        <Badge bg="warning">40代</Badge>
        {event.recruitmentTarget?.men !== false && (
          <Badge bg="primary">男性</Badge>
        )}
        {event.recruitmentTarget?.women !== false && (
          <Badge bg="danger">女性</Badge>
        )}
      </>
    )
  }

  return (
    <Container>
      <Row className="my-4">
        <Col lg={12}>
          <Card>
            <Card.Img src={event.main_image.url} alt="Card image" />
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title className="announcement-title">
                <h1>{event.title}</h1>
              </Card.Title>
              <Card.Text className="announcement-date">
                開催日: {formattedBlogDate}
              </Card.Text>
              <Card.Text className="announcement-location">
                場所: {event.place}
              </Card.Text>
              <Card.Text className="announcement-start">
                イベント開始時刻: {event.starttime}
              </Card.Text>
              <Card.Text className="announcement-end">
                イベント終了時刻: {event.endtime}
              </Card.Text>
              <Card.Text className="announcement-capacity">
                上限人数: {event.capacity}　{renderFlag()}
              </Card.Text>
              <Card.Text>対象：{targetElements(event)}</Card.Text>
              <Card.Text>混雑予想：{event.crowd}</Card.Text>
              <Card.Text className="announcement-text">
                <div dangerouslySetInnerHTML={{ __html: event.content }} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <center>
          <a
            className="btn btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSctxGl_6d6HZ_cjSE6HSsA0fmcofHIT4rZSw4fhvmlm1yUSOw/viewform"
          >
            お問い合わせ
          </a>
        </center>
      </Row>
      <Row>
        <Col lg="9"></Col>
        <Col lg="3">
          <Card.Text className="announcement-update">
            最終更新日時: {event.updatedAt}
          </Card.Text>
        </Col>
      </Row>
    </Container>
  )
}

export default Announcement
