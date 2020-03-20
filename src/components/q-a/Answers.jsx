import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const helper = require('../../helper/helper.js');

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: 0,
      hasVoted: false,
    };
  }

  componentDidMount() {
    this.setState({
      helpfulness: this.props.OneAnswer.helpfulness
    });
    helper.putHelpfulAnswer(this.props.OneAnswer.id, () => true)
  }

  VoteHelpful = () => {
    if (!this.state.hasVoted) {
    this.setState({
      hasVoted: true, helpfulness: this.state.helpfulness + 1
    })
    } 
  }


  render() {
  return (
    <Row className="layout" key={this.props.OneAnswer.id}>
      <b>A:&nbsp;</b>

      <Col className="layout" sm={9}>
        <Row className="layout">
          <Col className="layout">
            <Row className="layout">{ this.props.OneAnswer.body }</Row>

            <Row className="layout">
            By&nbsp;
              {this.props.OneAnswer.answerer_name === 'Seller' ? <strong>{this.props.OneAnswer.answerer_name}</strong>
                : this.props.OneAnswer.answerer_name}
                &nbsp;on&nbsp;
              {new Date(this.props.OneAnswer.date).toLocaleDateString('en-US',
                {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
                &nbsp;
              | Helpful?&nbsp;
              <div onClick={this.VoteHelpful}><u>Yes</u> ({this.state.helpfulness})</div>&nbsp;
              | Report
            </Row>
          </Col>
        </Row>
        <Row className="layout">
          <Col className="layout">
            <Row className="layout">Answer to reply?</Row>
            <Row className="layout">IMAGES</Row>
            {/* <Row className="layout">Date | Helpful | Report</Row> */}
          </Col>
        </Row>
      </Col>
    </Row>
    );
  }
}

export default Answers;
