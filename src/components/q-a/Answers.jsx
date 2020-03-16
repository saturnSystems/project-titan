import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const helper = require('../../helper/helper.js');

class Answers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
  }

  componentDidMount() {
    helper.getAnswersList(this.props.questionId, (results) => this.setState({ answers: results.results }));
  }

  render() {
    console.log(this.state.answers)
    const items = this.state.answers.map((answer, i) => (
      <Row className="layout" key={i}>
        A:

        <Col className="layout" sm={9}>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">{ answer.body }</Row>

              <Row className="layout">{new Date(answer.date).toLocaleDateString("en-US",
                {weekday: "long", 
                  year: "numeric", 
                  month: "short",  
                  day: "numeric"})} | Helpful? {' Yes (' + answer.helpfulness + ')'} | Report</Row>
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
    ),
    );

    return (
      <div>{ items }</div>
    );
  }
}

export default Answers;
