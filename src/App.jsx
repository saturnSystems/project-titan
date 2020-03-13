import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Overview from './components/overview/Overview';
import RIAC from './components/rIAC/RIAC';
import Qa from './components/q-a/Q-a';
import Reviews from './components/reviews/Reviews';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'react-bootstrap/Container'
const helper = require("./helper/helper.js");


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: [],
      currentReviewRating: 0,
      images: [],
      reviews: [],
      questions: [],
      answers: []
    };
  }

  componentDidMount(){
    helper.getOneProduct('1', result=>{
      this.setState({
        currentProduct: result
      })
      helper.getReviewMetadata(result.id, result=>{
        this.setState({
          currentReviewRating: helper.calculateReviewRating(result)
        })
      })
    })
  }

  render() {
    return (
      <Container-fluid className="layout">

        <Col className="layout">
          <Row className="layout">
              <Col className="layout" sm={2}>Logo</Col>
              <Col className="layout" sm={{span:2, offset:8}}>Search</Col>
          </Row>
          <Row className="layout">
              <Col className="layout">Sitewide Announcement</Col>
          </Row>
        </Col>
        <Overview reviewRating={this.state.currentReviewRating}/>
        <br></br>

        <RIAC/>
        <br></br>

        <Qa/>
        <br></br>

        <Reviews/>

      </Container-fluid>  
    )}
}

export default App;
