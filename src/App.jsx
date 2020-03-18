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
      productId: window.location.search.substr(1) || 1,
      currentProduct: [],
      currentReviewRating: 0,
      styles: [],
      reviews: [],
      questions: [],
      cart: [],
      relatedProducts: []
    };

    this.reviewsRef = React.createRef();
    this.scrollToReviews = this.scrollToReviews.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setProductId = this.setProductId.bind(this);
  }

  getProductInformation(){
    if (this.state.previousProductId !== this.state.productId) {

      helper.getOneProduct(this.state.productId, result => {
        this.setState({
          currentProduct: result
        });
      });
      helper.getReviewMetadata(this.state.productId, result => {
        this.setState({
          currentReviewRating: helper.calculateReviewRating(result.ratings)
        });
      });
      helper.getListReviews(this.state.productId, result => {
        this.setState({
          reviews: result.results
        });
      });
      helper.getListQuestions(this.state.productId, result => {
        this.setState({
          questions: result.results
        });
      });
      helper.getOneProductStyle(this.state.productId, result => {
        this.setState({
          styles: result.results
        });
      });
      helper.getRelatedProducts(this.state.productId, result => {
        this.setState({
          relatedProducts: result
        });
      });
      this.setState({
        previousProductId: this.state.productId
      });
    }
  }

  setProductId = (newProductId) => {
    this.setState({
      productID: newProductId
    },()=>this.getProductInformation());
    window.scrollTo(0, 0);
  }

  scrollToReviews = () => window.scrollTo(0, this.reviewsRef.current.offsetTop);

  addToCart(item) {
    let cart = this.state.cart || [];
    cart.push(item);
    this.setState({
      cart: cart
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  retrieveCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    this.setState({
      cart: cart
    });
  }

  componentDidMount() {
    this.retrieveCart()
    this.getProductInformation()
  }

  render() {
    const { reviews } = this.state;
    return (
      <Container-fluid className="layout">
        <Col className="layout" style={{backgroundColor:"#00b0ff"}}>
          <Row className="layout">
            <Col className="layout" sm={2}>
              <img
                src={
                  require("./logo.svg")
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
          scroll={this.scrollToReviews}
          product={this.state.currentProduct}
          styles={this.state.styles}
          addToCart={this.addToCart}
        />
        <br />

        {this.state.currentProduct.id !== undefined && (
          <RIAC
            setProductId={this.setProductId}
            products={this.state.products}
            currentProduct={this.state.currentProduct}
            relatedProductsIds={this.state.relatedProducts}
            reviewRating={this.state.currentReviewRating}
            styles={this.state.styles}
          />
        )}
        <br></br>

        <Qa questions={this.state.questions} />
        <br />

        <div ref={this.reviewsRef}>
          <Reviews
            reviews={reviews}
            product={this.state.currentProduct}
            productID={this.state.productId}
          />
        </div>
      </Container-fluid>
    );
  }
}

export default App;
