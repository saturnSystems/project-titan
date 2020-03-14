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
      reviews: [],
      answers: [],
      questions: [],
      date: []
    };
  }
  ////////// CURRENT USER STORY I AM WORKING ON //////////////////////
  /**
  Any images that were submitted as part of the review should appear as thumbnails below the review text.
  Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution. 
  The only functionality available within this modal should be the ability to close the window
  **/
  ////////////////////////////////////////////////////////////////////

  render() {
    return (
      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <Row className="layout">{"Ratings & Reviews"}</Row>
          <Row className="layout">
            <Col sm={4} className="layout">
              <Row className="layout">3.5*****</Row>
              <br></br>
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
              <br></br>
              <Row className="layout">
                <Col>
                  <Row>Size</Row>
                  <Row>||||||||||||||||||</Row>
                  <Row>Too small | Perfect | Too Large</Row>
                </Col>
              </Row>
              <br></br>
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
                {this.props.reviews.length}, sorted by relevance
              </Row>
              <br></br>
              {this.props.reviews.map(review => {
                let date = new Date(review.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                });
                return (
                  <ReviewTiles
                    review={review}
                    date={`${date}`}
                    key={review.review_id}
                    helper={helper}
                  />
                );
              })}

              <br></br>
              <br></br>
              <Row className="layout">MORE REVIEWS | ADD A REVIEW +</Row>
            </Col>
          </Row>
        </Col>
      </Container-fluid>
    );
  }
}
export default Reviews;
