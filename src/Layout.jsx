import React from 'react';
import 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Qa from './components/q-a/Q-a.jsx';
import Overview from './components/overview/Overview';
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

      <Qa />

      <Reviews />
    </Container-fluid>
  );
}
export default Layout;
