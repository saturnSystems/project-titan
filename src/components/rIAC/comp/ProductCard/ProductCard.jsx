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
      relatedProduct: {}
      // relatedProductId: props.relatedProductId // NOT USED
    }
  }

  componentDidUpdate(prevProps) {
    let currentRelatedProductId = this.props.relatedProductId
    if (typeof currentRelatedProductId === 'number' && currentRelatedProductId !== prevProps.relatedProductId) {
    // console.log("PC: cDU: cRPId: ", currentRelatedProductId)
      helper.getOneProduct(3, result => { // HARD CODED
        this.setState({
          relatedProduct: result
        });
      });  
      helper.getOneProductStyle(11, result=>{
        this.setState({
          styles: result.results
        })
      });
   }

  }

  setProductId = () => { // (event) parameter not actually used
    this.props.setProductId(this.props.relatedProductId);
  }

  scrollToTop () {
    window.scrollTo(0, 0);
  }

  render() {
    // const currentProduct = this.props.currentProduct; // NOT USED
    // console.log("PC: cP: ", currentProduct);
    // const relatedProductId = this.props.relatedProductId; // NOT USED
    // console.log("PC: rPId: ", relatedProductId);

    const relatedProduct = this.state.relatedProduct;
    const relatedCategory = relatedProduct.category;
    const relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
    const relatedDefPrice = relatedProduct.default_price;
    // const relatedRating = "***"; // NOT USED. Superceded by actual star rating
    
    const relatedStyles = this.props.styles;
      // console.log("PC: rPsSs[0]: ", relatedStyles[0])

    const relatedStylesIndex = 1; // HARD CODED
    const relatedStyle = relatedStyles[relatedStylesIndex];
      // console.log("PC: rS: ", relatedStyle);
  
    let relThumbnail = "(NO IMAGE AVAILABLE)"; // fallback
    const relatedThumbnailIndex = 0; // HARD CODED
    if (this.props.styles[relatedStylesIndex] !== undefined) { // needed, but WHY?
      relThumbnail = relatedStyle.photos[relatedThumbnailIndex].thumbnail_url;
    }

    // let reviewRating = this.props.reviewRating; // NOT USED

    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div id="product-card-div" onClick={() =>this.setProductId()}>
          <a onClick={this.scrollToTop}>
            <div className="card mb-3">
              <img className="card-img-top" src={relThumbnail}  alt=""/>
              <div className="card-img-overlay">
                <small><p className="btn btn-primary">*</p></small>
              </div>
            </div>
          </a>
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
