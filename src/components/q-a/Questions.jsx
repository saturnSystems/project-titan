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
    };
    this.ShowTwoMore = this.ShowTwoMore.bind(this);
    this.SearchBox = this.SearchBox.bind(this);
  }

  ShowTwoMore() {
    this.setState((prevState) => ({ renderQuestions: prevState.renderQuestions + 2 }));
  }

  SearchBox(event) {
    this.setState({
      SearchText: event.target.value.toUpperCase(),
    });
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
    if (this.state.SearchText.length >= 3) {
      sortedQuestions = sortedQuestions.filter(question => question.question_body
        .toUpperCase().includes(this.state.SearchText));
    }

    const items = sortedQuestions.map((question, i) => (
      <div key={i}>
        <Row className="layout" >
          <Col className="layout">
            <Row className="layout">
              <b>Q:&nbsp;</b>
              <Col className="layout" sm={9}>
                <Row className="layout"><b>{question.question_body}</b></Row>
              </Col>
              <Col className="layout">
                <Row className="layout">
                Helpful?
                  {' Yes (' + question.question_helpfulness + ') '}
                | Add answer
                </Row>
              </Col>
            </Row>
            <Answers questionId={question.question_id} />
          </Col>
        </Row>
        {i === sortedQuestions.length - 1 && i !== this.props.questions.length - 1
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
