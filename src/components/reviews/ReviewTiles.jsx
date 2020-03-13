import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ReviewTiles({ reviews }) {
  return (
    <dl>
      {reviews.map(review => (
        <React.Fragment key={review.review_id}>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                <Col className="layout" sm={3}>
                  <Row className="layout">{review.rating} stars</Row>
                </Col>
                <Col className="layout" sm={{ offset: 6 }}>
                  <Row className="layout">
                    {review.reviewer_name}, {review.date}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout" sm={9}>
                  <Row className="layout">{review.summary}</Row>
                  <Row className="layout">...title continuation</Row>
                  <Row className="layout">{review.body}</Row>
                  <Row className="layout">
                    # of Review Recommended is {review.recommend}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">Response:</Row>
                  <Row className="layout">
                    Response content: {review.response}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">Helpful? | Report</Row>
            </Col>
          </Row>
        </React.Fragment>
      ))}
    </dl>
  );
}
