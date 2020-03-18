// this component will go in Q-a.jsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Answers from './Answers';


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderQuestions: 2,
    };
    this.ShowTwoMore = this.ShowTwoMore.bind(this);
  }

  ShowTwoMore() {
    this.setState((prevState) => ({ renderQuestions: prevState.renderQuestions + 2 }));
  }

  render() {
    let questionList = [...this.props.questions];
    questionList = questionList.slice(0, this.state.renderQuestions);

    const items = questionList.map((question, i) => (
      <div>
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
          </Col>
        </Row>
        {i === questionList.length - 1 && i !== this.props.questions.length - 1
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
