/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overview from "./components/overview/Overview";
import FormControl from "react-bootstrap/FormControl";
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
      productID: window.location.search.substr(1) || 1, //productID = anything after /? in url,, or 1
      currentProduct: [],
      currentReviewRating: 0,
      styles: [],
      images: [],
      reviews: [],
      questions: [],
      answers: [],
      cart: [],
      relatedProducts: []
    };
    this.myRef = React.createRef();
    this.scrollToMyRef = this.scrollToMyRef.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    this.setState({
      cart: cart
    });

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
    helper.getListQuestions(this.state.productID, result => {
      // Q&A - Questions
      this.setState({
        questions: result.results
      });
    });
    helper.getOneProductStyle(this.state.productID, result => {
      this.setState({
        styles: result.results
      });
    });
    helper.getRelatedProducts(this.state.productID, result => {
      this.setState({
        relatedProducts: result
      });
    });
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  addToCart(item) {
    let cart = this.state.cart || [];
    cart.push(item);
    this.setState({
      cart: cart
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  render() {
    const { reviews } = this.state;
    return (
      <Container-fluid className="layout">
        <Col className="layout">
          <Row className="layout">
            <Col className="layout" sm={2}>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/1/1c/Saturn_mark.svg"
                }
                alt="Storefront logo: a line drawing of the planet saturn"
                style={{ width: "2em" }}
              />{" "}
              Saturn Storefronts
            </Col>
            <Col className="layout" sm={{ span: 2, offset: 8 }}>
              <FormControl
                type="text"
                size="sm"
                placeholder="Search..."
              ></FormControl>
            </Col>
          </Row>
          <Row className="layout">
            <Col className="layout">
              Sitewide Announcement: 100% OFF FOR ALL DEVELOPERS OF THIS SITE
            </Col>
          </Row>
        </Col>
        <Overview
          reviewRating={this.state.currentReviewRating}
          numReviews={this.state.reviews.length}
          scroll={this.scrollToMyRef}
          product={this.state.currentProduct}
          styles={this.state.styles}
          addToCart={this.addToCart}
        />
        <br />

        {/* {console.log("A: t.s.rPs: ", this.state.relatedProducts)} */}

        {this.state.currentProduct.id !== undefined && (
          <RIAC
            currentProduct={this.state.currentProduct}
            relatedProductsIds={this.state.relatedProducts}
            reviewRating={this.state.currentReviewRating}
            styles={this.state.styles}
          />
        )}
        <br></br>

        <Qa questions={this.state.questions} />
        <br />

        <div ref={this.myRef}>
          <Reviews
            reviews={reviews}
            product={this.state.currentProduct}
            productID={this.state.productID}
          />
        </div>
      </Container-fluid>
    );
  }
}

export default App;
