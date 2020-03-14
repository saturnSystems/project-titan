import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ReviewsTiles.css";
import StarRatings from "react-star-ratings";

export default class ReviewTiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: [],
      reviews: []
    };
  }

  render() {
    if (this.props.review.body.length < 54) {
      return null;
    }
    return (
      //////////// TODO ///////////////////////
      /**
     * Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product. 
                     The text submitted as part of the review will be between 50 and 1000 characters long.  
                     Users should be able to submit up to 5 images along with a single review.
                     By default, the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body the a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.
                     Any images that were submitted as part of the review should appear as *thumbnails* below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window. 
     
     * Reviewer name - The username for the reviewer will appear.  Only the username will appear. No email addresses or other personal information will display.  However, if the user’s email is associated to a sale in the system then next to the username the text “Verified Purchaser” will appear.
     * Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful.  At the bottom of the review tile the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”.   Following “Yes” and “No” will be the count of users that had selected that button.  Clicking either link should cast a vote for that selection.   
                            A user on the site does not need to be logged in to provide feedback on helpfulness.  
                            A user can provide feedback on any review.  However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.

     */
      <dl>
        <React.Fragment key={this.props.review.review_id}>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                <Col className="layout" sm={2}>
                  <Row className="layout stars">
                    <StarRatings
                      rating={this.props.review.rating}
                      starDimension="1em"
                      starSpacing={"0"}
                    />{" "}
                  </Row>
                </Col>
                <Col className="layout" sm={{ offset: 3 }}>
                  <Row className="layout floaty">
                    {this.props.review.reviewer_name}, {this.props.date}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">
                    <strong>{this.props.review.summary.slice(0, 60)}</strong>
                  </Row>
                  {this.props.review.summary.length > 60 ? (
                    <Row className="layout">
                      {"... " + this.props.review.summary.slice(60)}
                    </Row>
                  ) : null}
                  {/* {this.props.review.body.length >= 50 && */}
                  {this.props.review.body.length <= 1000 ? (
                    <Row className="layout">{this.props.review.body}</Row>
                  ) : null}
                  <Row className="layout">
                    {this.props.review.recommend === 1 ? (
                      <p>&#10004; I recommend this product</p>
                    ) : null}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout response">
                  {typeof this.props.review.response == "string" &&
                  this.props.review.response !== "null" ? (
                    <dl>
                      <Row className="layout response">
                        Response From Seller:
                      </Row>
                      <Row className="layout response">
                        {this.props.review.response}
                      </Row>
                    </dl>
                  ) : null}
                </Col>
              </Row>
              <Row className="layout">
                Helpful? Yes({this.props.review.helpfulness})| Report
              </Row>
            </Col>
          </Row>
        </React.Fragment>
      </dl>
    );
  }
}
