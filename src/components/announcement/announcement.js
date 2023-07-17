import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "../../styles/announcement.css"

const Announcement = ({ event }) => {
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
                開催日: {event.date}
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
                上限人数: {event.capacity}
              </Card.Text>
              <Card.Text className="announcement-text">
                <div dangerouslySetInnerHTML={{ __html: event.content }} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
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
