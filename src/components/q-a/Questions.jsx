import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from './Answers';
const helper = require("./../../helper/helper.js");

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false,
      helpfulness: 0,
    };
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

    console.log(answerListArray)


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
          </Col>
        </Row>
      </div>

    );
  }
}


export default Questions;
