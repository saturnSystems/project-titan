// this component is for use in RIAC.jsx
//   for both Related Products and Your Outfit
import React from 'react';
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' // NOT USED
import StarRatings from "react-star-ratings";

const helper = require("../../../../helper/helper.js");

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      relatedProduct: {},
      styles: []
      // relatedProductId: props.relatedProductId // NOT USED
    }
  }

  componentDidUpdate(prevProps) {
    let currentRelatedProductId = this.props.relatedProductId
    if (typeof currentRelatedProductId === 'number' && currentRelatedProductId !== prevProps.relatedProductId) {
    // console.log("PC: cDU: cRPId: ", currentRelatedProductId)
      helper.getOneProduct(this.props.relatedProductId, result => { // HARD CODED
        this.setState({
          relatedProduct: result
        });
      });  
      helper.getOneProductStyle(this.props.relatedProductId, result => {// HARD CODED
        this.setState({
          styles: result.results
        })
      });
      helper.getReviewMetadata(this.props.relatedProductId, result => {
        this.setState({
          currentReviewRating: helper.calculateReviewRating(result.ratings)
        });
      });
    }
  }

  setProductId = () => { // (event) parameter not actually used
    this.props.setProductId(this.props.relatedProductId);
  }

  render() {
    // const currentProduct = this.props.currentProduct; // NOT USED
    // console.log("PC: cP: ", currentProduct);
    // const relatedProductId = this.props.relatedProductId; // NOT USED
    console.log("PC: rPId: ", relatedProductId);

    const relatedProduct = this.state.relatedProduct;
    const relatedCategory = relatedProduct.category;
    const relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
    const relatedDefPrice = relatedProduct.default_price;
    // const relatedRating = "***"; // NOT USED. Superceded by actual star rating
    
    const relatedStyles = this.state.styles;
      console.log("PC: rSs: ", relatedStyles)

    // const relatedStylesIndex = 1; // HARD CODED
    // const defaultStyleIndex = styles.indexOffilter(style => style["default?"] === 1));
    const relatedStyle = relatedStyles.filter(style => style["default?"] === 1);

    // const relatedStyle = relatedStyles[relatedStylesIndex];
      console.log("PC: rS: ", relatedStyle);
  
    let relImg = "(NO IMAGE AVAILABLE)"; // fallback
    const relatedUrlIndex = 0; // HARD CODED
    // if (relatedStyles[relatedStylesIndex] !== undefined) { // needed, but WHY?
      relImg = relatedStyle.photos[relatedUrlIndex].url;
  // }

    // let reviewRating = this.props.reviewRating; // NOT USED

    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div id="product-card-div" onClick={() =>this.setProductId()}>
          <div onClick={this.scrollToTop}>
            <div className="card mb-3">
              <img className="card-img-top" src={relThumbnail}  alt=""/>
              <div className="card-img-overlay">
                <small><p className="btn btn-primary">*</p></small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
          <p className="card-text category">{relatedCategory}</p>
            <h5 className="card-title caption">{relatedCaption}</h5>
            <small><p className="card-text text-muted price">{relatedDefPrice}</p></small>
            {/* Placeholder. Superceded by star ratings, below. */}
            {/* <p className="card-text">{relatedRating}</p> */}
            <Row>              
              <StarRatings
                rating={this.props.reviewRating}
                starDimension="1em"
                starSpacing={"0"}
              />
            </Row>
          </div>
        </div>
      </Container-fluid>
    )
  }
}

export default ProductCard;
