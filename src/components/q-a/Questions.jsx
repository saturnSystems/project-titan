// this component will go in Q-a.jsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from './Answers';
// import FormControl from "react-bootstrap/FormControl";


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderQuestions: 4,
    };
    this.ShowTwoMore = this.ShowTwoMore.bind(this);
  }

  ShowTwoMore() {
    this.setState((prevState) => ({ renderQuestions: prevState.renderQuestions + 2 }));
  }

  render() {
    let sortedQuestions = [...this.props.questions];

    function compare(a, b) {
      if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      }
      return -1;
    }

    sortedQuestions = sortedQuestions.sort(compare).slice(0, this.state.renderQuestions);
    const items = sortedQuestions.map((question, i) => (
      <div>
        <Row className="layout" key={i}>
          <Col className="layout">
            <Row className="layout"><input type="text" placeholder="Search questions..." /></Row>
            <Row className="layout">
              <b>Q:</b>
              <Col className="layout" sm={9}>
                <Row className="layout"><b>{question.question_body}</b></Row>
              </Col>
              <Col className="layout">
                <Row className="layout">
                Helpful? 
                  {' Yes (' + question.question_helpfulness + ')'}
                | Add answer
                </Row>
              </Col>
            </Row>
            <Answers questionId={question.question_id} />
          </Col>
        </Row>
        {i === sortedQuestions.length - 1 && i !== this.props.questions.length - 1
          ? <Row className="layout"><button onClick={this.ShowTwoMore}>MORE ANSWERED QUESTIONS</button> | ADD A QUESTION +</Row>
          : null}
      </div>

    ));

    return (
      <div>
        { items }
      </div>
    );
  }
}


export default Questions;
