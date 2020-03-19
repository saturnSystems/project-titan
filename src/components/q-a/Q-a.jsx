// Q-a.jsx stub
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';

const Qa = (props) => (
  <div>
    <Container-fluid className="layout container">
      <Col sm={{ span: 10, offset: 1 }} className="layout container">
        <Row className="layout">
        QUESTIONS & ANSWERS
        </Row>
        <List questions={props.questions}/>

      </Col>
    </Container-fluid>
    <br />
  </div>
);

export default Qa;
