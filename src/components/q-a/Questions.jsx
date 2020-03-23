import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from './Answers';
import Button from 'react-bootstrap/Button';
import AddAnswer from '.././q-a/AddAnswer.jsx'
const helper = require("./../../helper/helper.js");

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVoted: false,
      helpfulness: 0,
      renderTwoAnswers: true,
      ShowModal: false,
    };
  }

  ShowAllAnswers = () => {
    this.setState({ renderTwoAnswers: !this.state.renderTwoAnswers });
  }

  ShowModal = () => {
    this.setState({ShowModal: true})
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

    if (this.state.renderTwoAnswers) {
    answerListArray = answerListArray.sort(compare).slice(0, 2);
    } else {
      answerListArray = answerListArray.sort(compare)
    }

    return (
      <div>
      {this.state.ShowModal ? <AddAnswer id={this.props.OneQuestion.question_id}/> : null}
        <Row className="layout" key={this.props.OneQuestion.question_id} style={{height: "45vh", width: "100%", padding: "2%", overflowWrap: "anywhere", overflowY: "scroll"}}>
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
                  &nbsp;| &nbsp;
                  <p onClick={this.ShowModal}><u>Add Answer</u></p>
                </Row>
              </Col>
            </Row>
            {answerListArray.map(answer => <Answers OneAnswer={answer} key={answer.id}/>)}
            {Object.keys(this.props.OneQuestion.answers).length > 2 ? this.state.renderTwoAnswers ? <Row style={{padding: "10px 10px 20px 5px"}}><Col><Button size="sm" type="submit" onClick={this.ShowAllAnswers}>Load more answers</Button></Col></Row> 
            : <Row><Col><Button size="sm" type="submit" onClick={this.ShowAllAnswers}>Collapse answers</Button></Col></Row> : null}
          </Col>
        </Row>
        </div>

    );
  }
}


export default Questions;
