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
import ProgressBar from "react-bootstrap/ProgressBar";

const helper = require("../../../helper/helper.js");

export default class Ratings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      meta: [],
      ratingStars: [],
      ratingVals: [],
      ratingValsSum: 0,
      ratingSum: 0,
      ratingsAvg: 0,
      reviews: [],
      ratingsLength: 0,
      starArr: ["1", "2", "3", "4", "5"],
      theSum: 0
    };
  }

  componentDidMount() {
    const { productId } = this.state;

    helper.getReviewMetadata(productId, results =>
      // eslint-disable-next-line implicit-arrow-linebreak
      this.setState({
        meta: results,
        ratingStars: Object.keys(results.ratings),
        ratingVals: Object.values(results.ratings),
        ratingsValsSum: Object.values(results.ratings).map(
          (item, i) => item * (i + 1)
        ),
        theSum: Object.keys(results.ratings)
          .map((item, i) => {
            const valys = Object.values(results.ratings);
            return parseInt(item, 10) * valys[i]; // .reduce((a, b) => a + b);
          })
          .reduce((a, b) => a + b),
        ratingSum: Object.values(results.ratings)
          .map((item, i) => item * (i + 1))
          .reduce((a, b) => a + b),

        ratingsLength: Object.values(results.ratings).reduce(
          (previous, current) => (current += previous)
        ),
        ratingsAvg:
          Object.keys(results.ratings)
            .map((item, i) => {
              const valys = Object.values(results.ratings);
              return parseInt(item, 10) * valys[i]; // .reduce((a, b) => a + b);
            })
            .reduce((a, b) => a + b) /
          Object.values(results.ratings).reduce(
            (previous, current) => (current += previous)
          )
      }));
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
          <Col sm={2}>
            <Row className="">5 Star</Row>
            <Row>4 Star </Row>
            <Row>3 Star</Row>
            <Row>2 Star</Row>
            <Row>1 Star</Row>
          </Col>
          <Col sm={8} className="noPaddy">
            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.theSum}
              now={
                this.state.ratingStars.includes("5")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("5")] *
                    5
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.theSum}
              now={
                this.state.ratingStars.includes("4")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("4")] *
                    4
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.theSum}
              now={
                this.state.ratingStars.includes("3")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("3")] *
                    3
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.theSum}
              now={
                this.state.ratingStars.includes("2")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("2")] *
                    2
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.theSum}
              now={
                this.state.ratingStars.includes("1")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("1")]
                  : 0
              }
            />
          </Col>
          <Col sm={1}>
            <Row>{this.state.ratingVals[4]}</Row>
            <Row>{this.state.ratingVals[3]}</Row>
            <Row>{this.state.ratingVals[2]}</Row>
            <Row>{this.state.ratingVals[1]}</Row>
            <Row>{this.state.ratingVals[0]}</Row>
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
