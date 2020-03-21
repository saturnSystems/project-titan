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
      ratingsValsSum: 0,
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
        ratingsValsSum: Object.values(results.ratings).reduce((a, b) => a + b),
        theSum: Object.keys(results.ratings)
          .map((item, i) => {
            const valys = Object.values(results.ratings);
            return parseInt(item, 10) * valys[i];
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
      })
    );
  }

  // bring in handleStarSort somehow??????
  render() {
    const { handleStarSort } = this.props;
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
            <Row onClick={() => handleStarSort(5)} className="underline">
              5 Star
            </Row>
            <Row onClick={() => handleStarSort(4)} className="underline">
              4 Star{" "}
            </Row>
            <Row onClick={() => handleStarSort(3)} className="underline">
              3 Star
            </Row>
            <Row onClick={() => handleStarSort(2)} className="underline">
              2 Star
            </Row>
            <Row onClick={() => handleStarSort(1)} className="underline">
              1 Star
            </Row>
          </Col>
          <Col sm={8} className="noPaddy">
            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.ratingsValsSum}
              now={
                this.state.ratingStars.includes("5")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("5")]
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.ratingsValsSum}
              now={
                this.state.ratingStars.includes("4")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("4")]
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.ratingsValsSum}
              now={
                this.state.ratingStars.includes("3")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("3")]
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.ratingsValsSum}
              now={
                this.state.ratingStars.includes("2")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("2")]
                  : 0
              }
            />

            <ProgressBar
              className="ratingBars"
              variant="success"
              max={this.state.ratingsValsSum}
              now={
                this.state.ratingStars.includes("1")
                  ? this.state.ratingVals[this.state.ratingStars.indexOf("1")]
                  : 0
              }
            />
          </Col>
          <Col sm={1}>
            <Row>
              {this.state.ratingStars.includes("5")
                ? this.state.ratingVals[this.state.ratingVals.length - 1]
                : 0}
            </Row>
            <Row>
              {this.state.ratingStars.includes("4")
                ? this.state.ratingVals[this.state.ratingStars.indexOf("4")]
                : 0}
            </Row>
            <Row>
              {this.state.ratingStars.includes("3")
                ? this.state.ratingVals[this.state.ratingStars.indexOf("3")]
                : 0}
            </Row>
            <Row>
              {this.state.ratingStars.includes("2")
                ? this.state.ratingVals[this.state.ratingStars.indexOf("2")]
                : 0}
            </Row>
            <Row>
              {this.state.ratingStars.includes("1")
                ? this.state.ratingVals[this.state.ratingStars.indexOf("1")]
                : 0}
            </Row>
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
