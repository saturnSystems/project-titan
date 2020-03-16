// this component will go in Q-a.jsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from "./Answers";


class Questions extends React.Component {

  render() {
    const items = this.props.questions.map((question, i) =>
      <Row className="layout" key={i}>
        <Col className="layout">
          <Row className="layout">Q:
         <Col className="layout" sm={9}>
          <Row className="layout">{question.question_body}</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">Helpful? | Add answer</Row>
            </Col>
          </Row>
          <Answers questionId={question.question_id}/>
        <Row>
        <Col>Load more answers</Col>
        </Row>
        </Col>
        </Row>
        )
        return (
          <div> { items } </div>
        )
    }
}



export default Questions;