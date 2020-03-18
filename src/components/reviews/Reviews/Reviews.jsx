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
    const sortedBy = "relevant";
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
  // onChange = newOptions => {
  //   // take original options and remove selected options
  //   const stateOptions = options.filter(
  //     option => !newOptions.find(op => op === option)
  //   );
  //   // sort the selected options
  //   const orderedNewOptions = newOptions.sort(compare);
  //   this.setState({
  //     // concat the two arrays
  //     options: orderedNewOptions.concat(stateOptions)
  //   });
  // };

  render() {
    const { reviews } = this.state;
    const { itemsToShow } = this.state;
    return (
      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <Row className="layout">Ratings and Reviews</Row>
          <Row className="layout">
            <Col sm={4} className="layout">
              <Row className="layout">3.5*****</Row>
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
              </Row>
            </Col>
            <Col className="layout">
              <Row className="layout">
                <span className="ptag">{reviews.length} Reviews, sort on</span>
                <DropdownButton title={this.state.sortedBy}>
                  {this.state.options.map(option => (
                    <DropdownItem
                      key={option}
                      title={option} /////////////////////////I AM WORKING HERE/////////////
                      // get selection and make
                      onClick={() => this.setState({ sortedBy: option })} // right now not triggering refresh
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
              {/* {!this.state.reviewsBtn &&
              this.state.itemsToShow < this.state.reviews.length ? (
                <button type="button" onClick={e => this.moreReviews()}>
                  Show more reviews
                </button>
              ) : null} */}

              {/* <br /> */}
              <Row className="layout">
                {!this.state.reviewsBtn &&
                this.state.itemsToShow < this.state.reviews.length ? (
                  <button
                    type="button"
                    className="blueBtn"
                    onClick={e => this.moreReviews()}
                  >
                    Show more reviews
                  </button>
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
