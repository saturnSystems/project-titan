import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Overview from "./components/overview/Overview";
import RIAC from "./components/rIAC/RIAC";
import Qa from "./components/q-a/Q-a";
import Reviews from "./components/reviews/Reviews/Reviews.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-bootstrap/Container";
const helper = require("./helper/helper.js");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productID: 1,
      currentProduct: [],
      currentReviewRating: 0,
      styles: [],
      images: [],
      reviews: [],
      questions: [],
      answers: []
    };
    this.myRef = React.createRef();
    this.scrollToMyRef = this.scrollToMyRef.bind(this);
  }

  componentDidMount() {
    helper.getOneProduct(this.state.productID, result => {
      this.setState({
        currentProduct: result
      });
    });
    helper.getReviewMetadata(this.state.productID, result => {
      this.setState({
        currentReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
    helper.getListReviews(this.state.productID, result => {
      this.setState({
        reviews: result.results
      })
    })
    helper.getListQuestions(this.state.productID, result => { // Q&A - Questions
      this.setState({
        questions: result.results
      })
    })
    helper.getOneProductStyle(this.state.productID,result=>{
      this.setState({
        styles: result.results
      })
    })
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  render() {
    return (
      <Container-fluid className="layout">
        <Col className="layout">
          <Row className="layout">
            <Col className="layout" sm={2}>
              Logo
            </Col>
            <Col className="layout" sm={{ span: 2, offset: 8 }}>
              Search
            </Col>
          </Row>
          <Row className="layout">
            <Col className="layout">Sitewide Announcement</Col>
          </Row>
        </Col>
        <Overview
          reviewRating={this.state.currentReviewRating}
          numReviews={this.state.reviews.length}
          scroll={this.scrollToMyRef}
          product={this.state.currentProduct}
          styles={this.state.styles}
        />
        <br></br>

        <RIAC />
        <br></br>

        <Qa questions={this.state.questions}/>
        <br></br>

        <div ref={this.myRef}>
          <Reviews />
        </div>
      </Container-fluid>
    );
  }
}

export default App;
