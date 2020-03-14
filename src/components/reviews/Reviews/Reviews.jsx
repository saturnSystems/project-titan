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
      currentReview: [],
      reviews: [],
      answers: [],
      questions: [],
      date: []
    };
  }

  ////////// CURRENT USER STORY I AM WORKING ON //////////////////////
  /**
   * Reviews: As a user, I want to be able to see reviews
   * created by other users so that I can decide
   * if I want the product or not.
   */
  ////////////////////////////////////////////////////////////////////

  //////////// TODO //////////////////////////////////////////////////
  /**
   * The list should display 2 tiles at a time. If there are more than 2 reviews that have been written for the given product, a button for “More Reviews” will appear below the list. 
   * If there are 2 or fewer reviews for the given product, then the button will not appear.

   * Clicking this button will cause up to 2 additional reviews to appear.   The list should expand, and the review tiles should show in order below the previously loaded questions.
   * As long as there are still unloaded reviews, the button will remain below the list.  Once all of the reviews for the product have been loaded, the button should no longer appear.
   */

  componentDidMount() {
    // sort this in helper by adding another parameter and alert team
    helper.getListReviews(50, results =>
      this.setState({ currentReview: results.results })
    );
  }
  render() {
    // console.log(this.state.currentReview);
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
                {this.state.currentReview.length}, sorted by relevance
              </Row>
              <br></br>
              {this.state.currentReview.map(review => {
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
                  />
                );
              })}

              <br></br>
              {/* <Row className="layout">
                <Col className="layout">
                  <Row className="layout">
                    <Col className="layout" sm={3}>
                      <Row className="layout">*****</Row>
                    </Col>
                    <Col className="layout" sm={{ offset: 6 }}>
                      <Row className="layout">User1234, Date</Row>
                    </Col>
                  </Row>
                  <Row className="layout">
                    <Col className="layout" sm={9}>
                      <Row className="layout">Review Title</Row>
                      <Row className="layout">...title continuation</Row>
                      <Row className="layout">Review content</Row>
                      <Row className="layout">Review Recommended</Row>
                    </Col>
                  </Row>
                  <Row className="layout">
                    <Col className="layout">
                      <Row className="layout">Response:</Row>
                      <Row className="layout">Response content</Row>
                    </Col>
                  </Row>
                  <Row className="layout">Helpful? | Report</Row>
                </Col>
              </Row> */}
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
