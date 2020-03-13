import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overview from "./components/overview/Overview";
import Reviews from "./components/reviews/Reviews";

function Layout(props) {
  return (
    <Container-fluid className="layout">
      <Col className="layout">
        <Row className="layout">
          <Col className="layout" sm={2}>
            Logo
          </Col>
          <Col className="layout" sm={{ span: 2, offset: 8 }}>
            Search
          </Col>
        </Row>
        <Row className="layout">
          <Col className="layout">Sitewide Announcement</Col>
        </Row>
      </Col>

      <Overview />
      <br></br>

      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <Row className="layout">Related Products</Row>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
          </Row>
          <br></br>
          <Row className="layout">Your Outfit</Row>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
          </Row>
        </Col>
      </Container-fluid>
      <br></br>

      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <Row className="layout">{"QUESTIONS & ANSWERS"}</Row>
          <Row className="layout">Search Bar</Row>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                Q:
                <Col className="layout" sm={9}>
                  <Row className="layout">Who What When</Row>
                </Col>
                <Col className="layout">
                  <Row className="layout">Helpful? | Add answer</Row>
                </Col>
              </Row>
              <Row className="layout">
                A:
                <Col className="layout" sm={9}>
                  <Row className="layout">
                    <Col className="layout">
                      <Row className="layout">Answer Text</Row>
                      <Row className="layout">Date | Helpful | Report</Row>
                    </Col>
                  </Row>
                  <Row className="layout">
                    <Col className="layout">
                      <Row className="layout">Answer to reply?</Row>
                      <Row className="layout">IMAGES</Row>
                      <Row className="layout">Date | Helpful | Report</Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>Load more answers</Col>
              </Row>
            </Col>
          </Row>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                Q:
                <Col className="layout" sm={9}>
                  <Row className="layout">Who What When</Row>
                </Col>
                <Col className="layout">
                  <Row className="layout">Helpful? | Add answer</Row>
                </Col>
              </Row>
              <Row className="layout">
                A:
                <Col className="layout" sm={9}>
                  <Row className="layout">
                    <Col className="layout">
                      <Row className="layout">Answer Text</Row>
                      <Row className="layout">Date | Helpful | Report</Row>
                    </Col>
                  </Row>
                  <Row className="layout">
                    <Col className="layout">
                      <Row className="layout">Answer to reply?</Row>
                      <Row className="layout">IMAGES</Row>
                      <Row className="layout">Date | Helpful | Report</Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>Load more answers</Col>
              </Row>
            </Col>
          </Row>
          <Row className="layout">
            MORE ANSWERED QUESTIONS | ADD A QUESTION +
          </Row>
        </Col>
      </Container-fluid>
      <br></br>

      <Reviews />
    </Container-fluid>
  );
}
export default Layout;
