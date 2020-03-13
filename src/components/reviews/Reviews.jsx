import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Reviews(props) {
  return (
    <Container-fluid className="layout container">
      <Col sm={{ span: 10, offset: 1 }} className="layout container">
        <Row className="layout">{"Ratings & Reviews"}</Row>
        <Row className="layout">
          <Col sm={4} className="layout">
            <Row className="layout">3.5*****</Row>
            <br></br>
            <Row className="layout">100% of reviews recommend</Row>
            <Row classname="layout">
              <Col>
                <Row>5 Stars ||||||||</Row>
                <Row>4 Stars ||||||</Row>
                <Row>3 Stars |||||||||||</Row>
                <Row>2 Stars ||||||</Row>
                <Row>1 Stars ||||</Row>
              </Col>
            </Row>
            <br></br>
            <Row className="layout">
              <Col>
                <Row>Size</Row>
                <Row>||||||||||||||||||</Row>
                <Row>Too small | Perfect | Too Large</Row>
              </Col>
            </Row>
            <br></br>
            <Row className="layout">
              <Col>
                <Row>Comfort</Row>
                <Row>||||||||||||||||||</Row>
                <Row>Poor | Perfect</Row>
              </Col>
            </Row>
          </Col>
          <Col className="layout">
            <Row className="layout">248 reviews, sorted by relevance</Row>
            <br></br>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">
                  <Col className="layout" sm={3}>
                    <Row className="layout">*****</Row>
                  </Col>
                  <Col className="layout" sm={{ offset: 6 }}>
                    <Row className="layout">User1234, Date</Row>
                  </Col>
                </Row>
                <Row className="layout">
                  <Col className="layout" sm={9}>
                    <Row className="layout">Review Title</Row>
                    <Row className="layout">...title continuation</Row>
                    <Row className="layout">Review content</Row>
                    <Row className="layout">Review Recommended</Row>
                  </Col>
                </Row>
                <Row className="layout">
                  <Col className="layout">
                    <Row className="layout">Response:</Row>
                    <Row className="layout">Response content</Row>
                  </Col>
                </Row>
                <Row className="layout">Helpful? | Report</Row>
              </Col>
            </Row>
            <br></br>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">
                  <Col className="layout" sm={3}>
                    <Row className="layout">*****</Row>
                  </Col>
                  <Col className="layout" sm={{ offset: 6 }}>
                    <Row className="layout">User1234, Date</Row>
                  </Col>
                </Row>
                <Row className="layout">
                  <Col className="layout" sm={9}>
                    <Row className="layout">Review Title</Row>
                    <Row className="layout">...title continuation</Row>
                    <Row className="layout">Review content</Row>
                    <Row className="layout">Review Recommended</Row>
                  </Col>
                </Row>
                <Row className="layout">
                  <Col className="layout">
                    <Row className="layout">Response:</Row>
                    <Row className="layout">Response content</Row>
                  </Col>
                </Row>
                <Row className="layout">Helpful? | Report</Row>
              </Col>
            </Row>
            <br></br>
            <Row className="layout">MORE REVIEWS | ADD A REVIEW +</Row>
          </Col>
        </Row>
      </Col>
    </Container-fluid>
  );
}
export default Reviews;
