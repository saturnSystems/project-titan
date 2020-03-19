/* eslint-disable react/prop-types */
import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Reviews.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

import ReviewTiles from "../ReviewsTiles/ReviewTiles";
import Ratings from "../ratings/Ratings.jsx";

const helper = require("../../../helper/helper.js");

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsBtn: false,
      reviews: [],
      productId: this.props.productID,
      itemsToShow: 2,
      options: ["newest", "helpful", "relevant"],
      option: "",
      sortedBy: "relevant"
    };
  }

  componentDidMount = () => {
    const { productID } = this.props;
    helper.getListReviews(productID, this.state.sortedBy, result => {
      this.setState({
        reviews: result.results
      });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { productID } = this.props;
    if (prevState.sortedBy !== this.state.sortedBy) {
      helper.getListReviews(productID, this.state.sortedBy, result => {
        this.setState({
          reviews: result.results
        });
      });
    }
  }

  moreReviews = () => {
    this.setState({ itemsToShow: this.state.itemsToShow + 2 });
  };

  setOption = option => {
    //// Do a helper call with sortedBy state? //////
    this.setState({ sortedBy: option });
  };

  render() {
    const { reviews } = this.state;
    const { itemsToShow } = this.state;
    return (
      <Container-fluid className="noBorder layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container noBorder">
          <Row className="layout noBorder">Ratings and Reviews</Row>
          <Row className="layout noBorder">
            <Col sm={3} className="layout noBorder">
              <Ratings
                productId={this.state.productId}
                reviews={this.state.reviews}
              />
              {/* <Row className="layout">3.5*****</Row>
              <br />
              <Row className="layout">100% of reviews recommend</Row>
              <Row className="layout">
                <Col>
                  <Row>5 Stars ||||||||</Row>
                  <Row>4 Stars ||||||</Row>
                  <Row>3 Stars |||||||||||</Row>
                  <Row>2 Stars ||||||</Row>
                  <Row>1 Stars ||||</Row>
                </Col>
              </Row>
              <br />
              <Row className="layout">
                <Col>
                  <Row>Size</Row>
                  <Row>||||||||||||||||||</Row>
                  <Row>Too small | Perfect | Too Large</Row>
                </Col>
              </Row>
              <br />
              <Row className="layout">
                <Col>
                  <Row>Comfort</Row>
                  <Row>||||||||||||||||||</Row>
                  <Row>Poor | Perfect</Row>
                </Col>
              </Row> */}
            </Col>
            <Col sm={1} className="layout noBorder"></Col>
            <Col className="layout noBorder">
              <Row className="layout noBorder">
                <span className="ptag noBorder">
                  {reviews.length} Reviews, sort on
                </span>
                <DropdownButton title={this.state.sortedBy}>
                  {this.state.options.map(option => (
                    <DropdownItem
                      key={option}
                      title={option}
                      onClick={() =>
                        this.setState({
                          sortedBy: option
                        })
                      }
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownButton>
              </Row>
              <br />
              {reviews.length >= 2
                ? reviews.slice(0, itemsToShow).map(review => {
                    const date = new Date(review.date).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      }
                    );
                    return (
                      <ReviewTiles
                        review={review}
                        date={`${date}`}
                        key={review.review_id}
                        helper={helper}
                      />
                    );
                  })
                : reviews.map(review => {
                    const date = new Date(review.date).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      }
                    );
                    return (
                      <ReviewTiles
                        review={review}
                        date={`${date}`}
                        key={review.review_id}
                        helper={helper}
                      />
                    );
                  })}

              <Row className="layout noBorder">
                {!this.state.reviewsBtn &&
                this.state.itemsToShow < this.state.reviews.length ? (
                  <Button className="blueBtn" onClick={e => this.moreReviews()}>
                    Show more reviews
                  </Button>
                ) : null}{" "}
                <span className="addReviewBtn">| ADD A REVIEW </span>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container-fluid>
    );
  }
}

export default Reviews;
