import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overview from "./components/overview/Overview";
import RIAC from "./components/rIAC/RIAC";
import Qa from "./components/q-a/Q-a";
import Reviews from "./components/reviews/Reviews/Reviews";
import "react-bootstrap/Container";

const helper = require("./helper/helper.js");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productID: window.location.search.substring(1) ||1, //productID = anything after ? in localhost:3000/?,, or 1
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
    const { productID } = this.state;
    helper.getOneProduct(productID, result => {
      this.setState({
        currentProduct: result
      });
    });
    helper.getReviewMetadata(productID, result => {
      this.setState({
        currentReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
    helper.getListReviews(productID, result => {
      this.setState({
        reviews: result.results
      });
    });
    helper.getListQuestions(productID, result => {
      // Q&A - Questions
      this.setState({
        questions: result.results
      });
    });
    helper.getOneProductStyle(productID, result => {
      this.setState({
        styles: result.results
      });
    });
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  render() {
    const { reviews } = this.state;
    return (
      <Container-fluid className="layout">
        <Col className="layout">
          <Row className="layout">
            <Col className="layout" sm={2}>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Saturn_mark.svg"} alt="Storefront logo: a line drawing of the planet saturn" style={{width:"2em"}}/> Saturn Storefronts
            </Col>
            <Col className="layout" sm={{ span: 2, offset: 8 }}>
              Search
            </Col>
          </Row>
          <Row className="layout">
            <Col className="layout">Sitewide Announcement: 100% OFF FOR ALL DEVELOPERS OF THIS SITE</Col>
          </Row>
        </Col>
        <Overview
          reviewRating={this.state.currentReviewRating}
          numReviews={this.state.reviews.length}
          scroll={this.scrollToMyRef}
          product={this.state.currentProduct}
          styles={this.state.styles}
        />
        <br />

        <RIAC currentProduct={this.state.currentProduct} />
        <br />

        <Qa questions={this.state.questions} />
        <br />

        <div ref={this.myRef}>
          <Reviews reviews={reviews} />
        </div>
      </Container-fluid>
    );
  }
}

export default App;
