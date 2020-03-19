import React, { Component } from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const helper = require("../../../helper/helper.js");

export default class Ratings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productId,
      meta: [],
      ratingSummary: 0
    };
  }

  componentDidMount = () => {
    const { productId } = this.state;
    helper.getReviewMetadata(productId, results =>
      this.setState({
        meta: results,
        ratingSummary: Object.values(results.ratings)
      })
    );
  };

  render() {
    return (
      <dl>
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
      </dl>
    );
  }
}
