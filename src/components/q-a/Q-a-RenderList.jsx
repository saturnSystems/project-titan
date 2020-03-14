// this component will go in Q-a.jsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// getListQuestions


class RenderList extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

     // question.question_body
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
        <Row className="layout">A:
        <Col className="layout" sm={9}>
        <Row className="layout">
        <Col className="layout">
        <Row className="layout">Answer Text</Row>
        <Row className="layout">{question.question_date} | Helpful? {'Yes (' + question.question_helpfulness + ')'} | Report</Row>
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
        )
        return (
          <div> { items } </div>
        )
    }
}

export default RenderList;