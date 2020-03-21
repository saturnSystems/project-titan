import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Questions from '../q-a/Questions';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			SearchText: '',
			renderQuestions: 2,
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

  render() {
    let questions = this.props.questions;

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
		
		return (
			<div key={this.props.product_id}>
			<Row className="layout">
			<FormControl size="lg" type="text" placeholder="Have a question? Search for answers…" onChange={this.SearchBox} style={{margin: "15px"}} /></Row>
			{questions.map(question => <Questions OneQuestion={question} key={question.question_id}/>)}
			{this.state.renderQuestions < this.props.questions.length && this.props.questions.length > 2
			? <Row className="layout"><Button size="sm" onClick={this.ShowTwoMore} style={{margin: "5px", padding: "5px"}}>MORE ANSWERED QUESTIONS</Button><Button style={{margin: "5px", padding: "5px"}}>ADD A QUESTION +</Button></Row> 
			: <Row className="layout" style={{padding: "20px 0px 0px 0px"}}><Button>ADD A QUESTION +</Button></Row>}
		</div>
		)
	}

}


export default List;
