/* eslint-disable arrow-parens */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unused-state */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Ratings.css";
import StarRatings from "react-star-ratings";

const helper = require("../../../helper/helper.js");

export default class Ratings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      meta: [],
      ratingSummary: 0,
      ratingsAvg: 0,
      reviews: [],
      ratingsSum: 0,
      ratingsLength: 0
    };
  }

  componentDidMount() {
    const { productId } = this.state;

    helper.getReviewMetadata(productId, results =>
      this.setState({
        meta: results,
        ratingSummary: Object.values(results.ratings)
          .map((item, i) => item * (i + 1))
          .reduce((a, b) => a + b),

        ratingsLength: Object.values(results.ratings).reduce(
          (previous, current) => (current += previous)
        ),

        ratingsAvg:
          Object.values(results.ratings)
            .map((item, i) => item * (i + 1))
            .reduce((a, b) => a + b) /
          Object.values(results.ratings).reduce(
            (previous, current) => (current += previous)
          )
      })
    );
  }

  render() {
    return (
      <dl>
        <Row className="layout noBorder ratingAvg">
          {this.state.ratingsAvg.toFixed(1)}

          <span className="stary">
            <StarRatings
              rating={this.state.ratingsAvg}
              starDimension="1em"
              starSpacing="0"
            />{" "}
          </span>
        </Row>
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
      </dl>
    );
  }
}
