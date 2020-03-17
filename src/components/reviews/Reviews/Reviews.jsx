/* eslint-disable react/prop-types */
import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReviewTiles from "../ReviewsTiles/ReviewTiles";

const helper = require("../../../helper/helper.js");

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsBtn: false,
      reviews: [],
      productId: this.props.productID,
      itemsToShow: 2
    };
  }

  componentDidMount() {
    const { productID } = this.props;
    helper.getListReviews(productID, result => {
      this.setState({
        reviews: result.results
      });
    });
  }
  moreReviews = () => {
    this.setState({ itemsToShow: this.state.itemsToShow + 2 });
  };

  render() {
    const { reviews } = this.props;
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
                {reviews.length}, sorted by relevance
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
              {!this.state.reviewsBtn &&
              this.state.itemsToShow !== this.state.reviews.length ? (
                <button type="button" onClick={e => this.moreReviews()}>
                  Show more reviews
                </button>
              ) : null}

              {/* reviews.slice(2, 4).map(review => {
              //     const date = new Date(review.date).toLocaleDateString(
              //       "en-US",
              //       {
              //         day: "numeric",
              //         month: "short",
              //         year: "numeric"
              //       }
              //     );
              //     return (
              //       <ReviewTiles
              //         review={review}
              //         date={`${date}`}
              //         key={review.review_id}
              //         helper={helper}
              //       />
              //     );
              //   })
              // )} */}
              <br />
              <br />
              <Row className="layout">MORE REVIEWS | ADD A REVIEW +</Row>
            </Col>
          </Row>
        </Col>
      </Container-fluid>
    );
  }
}

export default Reviews;
