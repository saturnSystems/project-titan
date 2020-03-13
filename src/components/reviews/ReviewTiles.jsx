import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ReviewTiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: [],
      reviews: []
    };
  }

  render() {
    return (
      //////////// TODO ///////////////////////
      /**
     
     * "2020-02-07T00:00:00.000Z"
     * Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be 
                        capped at 60 characters.  On the review tile, this summary will appear in bold font above the full review.
     * Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product. 
                     The text submitted as part of the review will be between 50 and 1000 characters long.  
                     Users should be able to submit up to 5 images along with a single review.
                     By default, the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body the a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.
                     Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window. 
     * Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.
     * Reviewer name - The username for the reviewer will appear.  Only the username will appear. No email addresses or other personal information will display.  However, if the user’s email is associated to a sale in the system then next to the username the text “Verified Purchaser” will appear.
     * Response to Review - Our internal sales team has the ability to respond to any reviews written.  If the review has a corresponding response, this should appear below the reviewer name.  The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.
     * Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful.  At the bottom of the review tile the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”.   Following “Yes” and “No” will be the count of users that had selected that button.  Clicking either link should cast a vote for that selection.   
                            A user on the site does not need to be logged in to provide feedback on helpfulness.  
                            A user can provide feedback on any review.  However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.

     */
      <dl>
        <React.Fragment key={this.props.review.review_id}>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                <Col className="layout" sm={3}>
                  <Row className="layout">{this.props.review.rating} stars</Row>
                </Col>
                <Col className="layout" sm={{ offset: 6 }}>
                  <Row className="layout">
                    {this.props.review.reviewer_name}, {this.props.date}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout" sm={9}>
                  <Row className="layout">{this.props.review.summary}</Row>
                  <Row className="layout">...title continuation</Row>
                  <Row className="layout">{this.props.review.body}</Row>
                  <Row className="layout">
                    # of Review Recommended is {this.props.review.recommend}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">Response:</Row>
                  <Row className="layout">
                    Response content: {this.props.review.response}
                  </Row>
                </Col>
              </Row>
              <Row className="layout">Helpful? | Report</Row>
            </Col>
          </Row>
        </React.Fragment>
      </dl>
    );
  }
}
