import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Answers from './Answers';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderQuestions: 4,
      SearchText: '',
      hasVoted: false,
    };
  }

  ShowTwoMore = e => {
    this.setState((prevState) => ({ renderQuestions: prevState.renderQuestions + 2 }));
  }

  SearchBox = event => {
    this.setState({
      SearchText: event.target.value.toUpperCase(),
    });
  }

  Helpfulness = () => {
    this.setState({
      hasVoted: true,
    });
  }

  render() {
    let { questions } = this.props

    function compare(a, b) {
      if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      }
      return -1;
    }

    questions = questions.sort(compare).slice(0, this.state.renderQuestions);
    if (this.state.SearchText.length >= 3) {
      questions = questions.filter(question => question.question_body
        .toUpperCase().includes(this.state.SearchText));
    }

    const items = questions.map((question, i) => (
      <div>
        <Row className="layout" key={i}>
          <Col className="layout">
            <Row className="layout">
              <b>Q:&nbsp;</b>
              <Col className="layout" sm={9}>
                <Row className="layout"><b>{question.question_body}</b></Row>
              </Col>
              <Col className="layout">
                <Row className="layout">
                Helpful?&nbsp;
                  <div onClick={this.Helpfulness}>{' Yes (' + question.question_helpfulness + ') '}</div>
                  &nbsp;| Add answer
                </Row>
              </Col>
            </Row>
            <Answers questionId={question.question_id} />
          </Col>
        </Row>
        {i === questions.length - 1 && i !== this.props.questions.length - 1
          ? <Row className="layout"><Button onClick={this.ShowTwoMore}>MORE ANSWERED QUESTIONS</Button> | ADD A QUESTION +</Row>
          : null}
      </div>

    ));

    return (
      <div>
        <Row className="layout"><div><form><FormControl type="text" placeholder="Have a question? Search for answers…" onChange={this.SearchBox} /></form></div></Row>
        { items }
      </div>
    );
  }
}


export default Questions;
