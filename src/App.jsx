import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Overview from './components/overview/Overview';
import Rp from './components/rp/Rp';
import Qa from './components/qa/Qa';
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
    helper.getReviewMetadata('1', result=>{
      this.setState({
        currentReviewRating: helper.calculateReviewRating(result)
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

        <Rp/>
        <br></br>

        <Qa/>
        <br></br>

        <Reviews/>

      </Container-fluid>  
    )}
}

export default App;
