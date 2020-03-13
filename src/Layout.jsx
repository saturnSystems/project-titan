import React from 'react';
import 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Qa from './components/q-a/Q-a.jsx';
import Overview from './components/overview/Overview';
import Reviews from "./components/reviews/Reviews";
import RIAC from "./components/RIAC/RIAC";

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

      <RIAC />
      <br></br>

      <Qa />

      <Reviews />
    </Container-fluid>
  );
}
export default Layout;
