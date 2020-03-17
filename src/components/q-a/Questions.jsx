// this component will go in Q-a.jsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from './Answers';


const Questions = (props) => {

  const items = props.questions.map((question, i) => (
    <Row className="layout" key={i}>
      <Col className="layout">
        <Row className="layout">
        Q:
          <Col className="layout" sm={9}>
            <Row className="layout">{question.question_body}</Row>
          </Col>
          <Col className="layout">
            <Row className="layout">Helpful? {' Yes (' + question.question_helpfulness + ')'} | Add answer</Row>
          </Col>
        </Row>
        <Answers questionId={question.question_id} />
        <Row>
          <Col>Load more answers</Col>
        </Row>
      </Col>
    </Row>

  ),
  );

  return (
    <div>
      { items }
    </div>
  );
};


export default Questions;
