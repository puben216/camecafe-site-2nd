import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "../../styles/announcement.css"
import ReactMarkdown from "react-markdown"

const Announcement = ({ event }) => {
  return (
    <Container>
      <Row className="my-4">
        <Col lg={12}>
          <Card>
            <Card.Img src="../../static/noimage2.jpg" alt="Card image" />
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title className="announcement-title">
                <h1>{event.title}</h1>
              </Card.Title>
              <Card.Text className="announcement-date">
                公開日: 2023年6月20日
              </Card.Text>
              <Card.Text className="announcement-update">
                更新日: {event.updatedAt}
              </Card.Text>
              <Card.Text className="announcement-location">
                場所: {event.place}
              </Card.Text>
              <Card.Text className="announcement-gathering">
                集合場所: {event.gatheringPlace}
              </Card.Text>
              <Card.Text className="announcement-capacity">
                上限人数: {event.capacity}
              </Card.Text>
              <Card.Text className="announcement-start">
                イベント開始時刻: {event.startTime}
              </Card.Text>
              <Card.Text className="announcement-end">
                イベント終了時刻: {event.endTime}
              </Card.Text>
              <Card.Text className="announcement-text">
                <ReactMarkdown>
                  <div dangerouslySetInnerHTML={{ __html: event.content }} />
                </ReactMarkdown>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Announcement
