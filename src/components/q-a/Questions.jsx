import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from './Answers';
import Button from 'react-bootstrap/Button';
const helper = require("./../../helper/helper.js");

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false,
      helpfulness: 0,
      renderAnswers: 2
    };
  }

  ShowTwoMore = () => {
    this.setState((prevState) => ({ renderAnswers: prevState.renderAnswers + 2 }));
  }

  Helpfulness = () => {
    if (!this.state.hasVoted) {
    this.setState({ hasVoted: true, helpfulness: this.state.helpfulness + 1 });
    helper.putHelpfulQuestion(this.props.OneQuestion.question_id, () => true)
   }
  }

  componentDidMount() {
    this.setState({
      helpfulness: this.props.OneQuestion.question_helpfulness
    })
  }

  render() {
  
    let answerList = this.props.OneQuestion.answers;
    let answerListArray = [];

    for (let key in answerList) {
      answerListArray.push(answerList[key])
    }

    function compare(a, b) {
      if (a.answerer_name === 'Seller' && b.helpfulness < a.helpfulness) {
        return -1;
      } else if (a.answerer_name !== 'Seller' && a.helpfulness < b.helpfulness) {
        return 1;
      } else if (b.answerer_name === 'Seller') {
        return 1;
      } else {
        return -1;
      }
    }

    answerListArray = answerListArray.sort(compare).slice(0, this.state.renderAnswers);

    return (
      <div>
        <Row className="layout" key={this.props.OneQuestion.question_id}>
          <Col className="layout">
            <Row className="layout">
              <b>Q:&nbsp;</b>
              <Col className="layout" sm={9}>
                <Row className="layout"><b>{this.props.OneQuestion.question_body}</b></Row>
              </Col>
              <Col className="layout">
                <Row className="layout">
                Helpful?&nbsp;
                  <div onClick={this.Helpfulness}><u>Yes</u>{' (' + this.state.helpfulness + ') '}</div>
                  &nbsp;| Add answer
                </Row>
              </Col>
            </Row>
            {answerListArray.map(answer => <Answers OneAnswer={answer} />)}
            {this.state.renderAnswers < Object.keys(this.props.OneQuestion.answers).length ? <Row><Col><Button type="submit" onClick={this.ShowTwoMore}>Load more answers</Button></Col></Row> : null }
          </Col>
        </Row>
      </div>

    );
  }
}


export default Questions;
