/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const helper = require('../../helper/helper.js');

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      renderAnswers: 2,
    };
    this.ShowTwoMore = this.ShowTwoMore.bind(this);
  }

  componentDidMount() {
    helper.getAnswersList(this.props.questionId,
      (results) => this.setState({ answers: results.results }));
  }

  ShowTwoMore() {
    this.setState((prevState) => ({ renderAnswers: prevState.renderAnswers + 2 }));
  }

  render() {
    let sortedAnswers = [...this.state.answers];

    function compare(a, b) {
      if (a.answerer_name === 'Seller' && b.helpfulness < a.helpfulness) {
        return -1;
        // eslint-disable-next-line no-else-return
      } else if (a.answerer_name !== 'Seller' && a.helpfulness < b.helpfulness) {
        return 1;
      } else if (b.answerer_name === 'Seller') {
        return 1;
      } else {
        return -1;
      }
    }

    sortedAnswers = sortedAnswers.sort(compare).slice(0, this.state.renderAnswers);

    const items = sortedAnswers.map((answer, i) => (
      <Row className="layout" key={i}>
        A:

        <Col className="layout" sm={9}>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">{ answer.body }</Row>

              <Row className="layout">
              By&nbsp;
                {answer.answerer_name === 'Seller' ? <strong>{answer.answerer_name}</strong>
                  : answer.answerer_name}
                  &nbsp;on&nbsp;
                {new Date(answer.date).toLocaleDateString('en-US',
                  { weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                  &nbsp;
                | Helpful?
                {' Yes ('}
                {answer.helpfulness}
                {') '}
                | Report
              </Row>
            </Col>
          </Row>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">Answer to reply?</Row>
              <Row className="layout">IMAGES</Row>
              <Row className="layout">Date | Helpful | Report</Row>
            </Col>
          </Row>
          {i === sortedAnswers.length - 1 && i !== this.state.answers.length - 1
            ? <Row><Col><button type="submit" onClick={this.ShowTwoMore}>Load more answers</button></Col></Row>
            : null}
        </Col>
      </Row>
    ));

    return (
      <div>{ items }</div>
    );
  }
}

export default Answers;
