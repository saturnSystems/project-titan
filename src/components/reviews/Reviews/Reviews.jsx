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
   *Rating Helpfulness* - Any user on the site will have the ability to provide feedback 
    on whether reviews are helpful.  At the bottom of the review tile the text “Was this review helpful?” 
    will precede two links “Yes (#)” and “No (#)”.   Following “Yes” and “No” will be the count of users
    that had selected that button.  Clicking either link should cast a vote for that selection.

    A user on the site does not need to be logged in to provide feedback on helpfulness.  

    A user can provide feedback on any review.  However, they can only make one submission for each review.
    If the user selects either “Yes” or “No” for a review, they should not be able to select another option 
    again for that review.
  **/
  ////////////////////////////////////////////////////////////////////

  //////////// TODO //////////////////////////////////////////////////
  /**
   * The list should display 2 tiles at a time. If there are more than 2 reviews that have been written for the given product, a button for “More Reviews” will appear below the list. 
   * If there are 2 or fewer reviews for the given product, then the button will not appear.

   * Clicking this button will cause up to 2 additional reviews to appear.   The list should expand, and the review tiles should show in order below the previously loaded questions.
   * As long as there are still unloaded reviews, the button will remain below the list.  Once all of the reviews for the product have been loaded, the button should no longer appear.
   */

  // componentDidMount() {
  //   // sort this in helper by adding another parameter and alert team
  //   helper.getListReviews(50, results =>
  //     this.setState({ currentReview: results.results })
  //   );
  // }
  render() {
    console.log(this.props.reviews);
    // console.log(this.props.product);
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
