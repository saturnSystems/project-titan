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
      sortedBy: "relevant",
      starSort: null,
      practiceSort: []
    };
  }

  handleStarSort = star => {
    // console.log(star);
    this.setState({ starSort: star });
  };

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
    if (prevState.starSort !== this.state.starSort) {
      helper.getListReviews(productID, this.state.sortedBy, result => {
        this.setState({
          reviews: result.results.filter(
            item => item.rating === this.state.starSort
          )
        });
      });
    }
  }

  moreReviews = () => {
    this.setState({ itemsToShow: this.state.itemsToShow + 2 });
  };

  setOption = option => {
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
            <Col sm={2} className="layout noBorder">
              <Ratings
                productId={this.state.productId}
                reviews={this.state.reviews}
                handleStarSort={this.handleStarSort}
              />
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
              <Row
                style={{
                  height: "80vh",
                  width: "100%",
                  padding: "2%",
                  overflowWrap: "anywhere",
                  overflowY: "scroll"
                }}
              >
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
              </Row>
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
