// this component is for use in RIAC.jsx
//   for both Related Products and Your Outfit
import React from 'react';
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' // NOT USED
import StarRatings from "react-star-ratings";
import "./NoImageOnFile.jpg";
// props
//   setProductId   ={this.props.setProductId}
//   currentProduct   ={this.props.currentProduct}
//   relatedProductId   ={relatedProductId}

const helper = require("../../../../helper/helper.js");

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedProduct: null, // change over time, requiring re-render
      relatedStyles: null, // change over time, requiring re-render
      relatedReviewRating: null // change over time, requiring re-render
    }
    this.loadRelatedProductData = this.loadRelatedProductData.bind(this);
    this.loadRelatedStylesData = this.loadRelatedStylesData.bind(this);
    this.loadRelatedReviewRatingData = this.loadRelatedReviewRatingData.bind(this);
    this.setProductId = this.setProductId.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }
  
  componentDidMount() {
    let relatedProductId = this.props.relatedProductId
    // console.log("+++++PC: cDM: if cRPId: ", relatedProductId)
    this.loadRelatedProductData();
  };
  
  componentDidUpdate = (prevProps, prevState) => {
    // console.log("+++++PC: cDU: rPI: ", relatedProductId);
    if (prevState.relatedProductData !== this.state.relatrelatedProductDataedStyles) {
      this.loadRelatedProductData();
    }
    if (prevState.relatedStyles !== this.state.relatedStyles) {
      this.loadRelatedStylesData();
    }
    if (prevState.relatedReviewRating !== this.state.relatedReviewRating) {
      this.loadRelatedReviewRatingData();
    }
  }
  
  loadRelatedProductData = (relatedProductId) => {
    // console.log("+++++PC: lRPD: t.p.rPI: ", this.props.relatedProductId)
    helper.getOneProduct(relatedProductId, result => {
        this.setState({
        relatedProduct: result
      });
    });
    console.log("PC: lRPD: t.s.rP: ", this.state.relatedProduct)
  };

  loadRelatedStylesData = (relatedProductId) => {
      helper.getOneProductStyle(relatedProductId, result => {
      this.setState({
        relatedStyles: result.results
      });
    });
    console.log("PC: lRPD: t.s.rSs: ", this.state.relatedStyles)
  };

  loadRelatedReviewRatingData = (relatedProductId) => {
    helper.getReviewMetadata(this.props.relatedProductId, result => {
      this.setState({
        relatedReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
    console.log("PC: lRPD: t.s.rRR: ", this.state.relatedReviewRating)
  };
  
  // setRelatedProductId = (newRelatedProductId) => { // (event) parameter not actually used
  //   this.props.setRelatedProductId(this.props.relatedProductId);
  // }

  setProductId = (newProductId) => { // (event) parameter not actually used
    this.props.setProductId(newProductId);
  }

  render() {
    console.log("PC-DATE-TIME: render: ", new Date());
    let componentDidUpdate = this.componentDidUpdate;

    if (this.props.relatedProductId === undefined) return null; // FURTHER ACTION REQUIRED
    // console.log("PC: render: t.p.rPId: ", this.props.relatedProductId);

    let relatedProductId = this.props.relatedProductId;
    // if (relatedProductId === undefined) return null; // FURTHER ACTION REQUIRED
    // console.log("PC: render: rPId: ", relatedProductId);
    
    // this.loadRelatedProductData();
    let relatedProduct = this.state.relatedProduct;
    if (relatedProduct === null) return null; // FURTHER ACTION REQUIRED
    // if (relatedProduct.id === undefined) return null; // FURTHER ACTION REQUIRED
    // if (relatedProduct === null) this.loadRelatedProductData; // FURTHER ACTION REQUIRED
    // if (relatedProduct === null) componentDidUpdate; // FURTHER ACTION REQUIRED
    console.log("PC: rP: ", relatedProduct);

    let relatedCategory = relatedProduct.category;
    // if (relatedProduct.category === undefined) return null; // FURTHER ACTION REQUIRED
    if (relatedProduct === null) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rCat: ", relatedCategory);

    if (relatedProduct.name === undefined || relatedProduct.slogan === undefined) return null; // FURTHER ACTION REQUIRED
    let relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
    if (relatedCaption === undefined) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rCap: ", relatedCaption);

    let relatedDefPrice = relatedProduct.default_price;
    if (relatedDefPrice === undefined) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rDF: ", relatedDefPrice);

    let relatedStyles = this.state.relatedStyles;
    //if (relatedStyles === undefined) return null; // FURTHER ACTION REQUIRED
    if (relatedStyles.length <= 0) return null; // FURTHER ACTION REQUIRED
    // if (relatedStyles === null) this.loadRelatedStylesData; // FURTHER ACTION REQUIRED
    console.log("PC render: rSs: ", relatedStyles);

    // does it ever log after teh state being set or is it always before
    // if (this.state.relatedStyles === undefined) return null;

    console.log("PC: rSs[0]: ", relatedStyles[0]);

    // let defaultStyleIndex = relatedStyles.indexOf(filter(style => relatedStyles.results[index]["default?"] === 1));
    // if (defaultStyleIndex === undefined) defaultStyleIndex = null; // FURTHER ACTION REQUIRED
    // console.log("PC: dSIx: ", defaultStyleIndex);

    let relatedStyle = relatedStyles.filter(style => style["default?"] === 1);
    // let relatedStylesIndex = 2; // HARD CODED
    // // let relatedStylesIndex = defaultStyleIndex;
    // let relatedStyle = relatedStyles[relatedStylesIndex];
    if (relatedStyle === undefined) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rS: ", relatedStyle);

    let relatedStyleOriginalPrice = relatedStyle.original_price;
    if (relatedStyleOriginalPrice === undefined) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rSOP: ", relatedStyleOriginalPrice);

    let relatedStyleSalePrice = relatedStyle.sale_price || null;
    if (relatedStyleSalePrice === undefined) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rStyle: ", relatedStyleSalePrice);
    
    let relatedStyleImage = relatedStyle.photos[0].url || null;
    if (relatedStyleImage === undefined) return null; // FURTHER ACTION REQUIRED
    console.log("PC: rS: ", relatedStyleImage);

    // let relThumbnail = "./NoImageOnFile.jps"; // fallback
    // let relatedThumbnailIndex = 0; // HARD CODED
    // if (this.state.relatedStyles[relatedStylesIndex] !== undefined) { // needed, but WHY?
    //   relThumbnail = relatedStyle.photos[relatedThumbnailIndex].thumbnail_url;
    // }

    // let relatedRating = "***"; // NOT USED. Superceded by actual star rating
    
    let relatedReviewRating = this.state.relatedReviewRating
    if (relatedReviewRating === null) return null; // FURTHER ACTION REQUIRED
    // if (relatedReviewRating === null) this.loadRelatedReviewRatingData; // FURTHER ACTION REQUIRED
    console.log("PC: render: rRR: ", relatedReviewRating);
    // if (relatedReviewRating === undefined) relatedReviewRating = null; // FURTHER ACTION REQUIRED
    // console.log("PC: render: rRR: ", relatedReviewRating);

    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div id="product-card-div" onClick={() =>this.setProductId(relatedProductId)}>
          <div onClick={this.scrollToTop}>
            <div className="card mb-3">
              <img className="card-img-top" src={relatedStyleImage}  alt=""/>
              <div className="card-img-overlay">
                <p className="btn btn-primary">&#2605;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
          <p className="card-text category">{relatedCategory}</p>
            <h5 className="card-title caption">{relatedCaption}</h5>
            <small><p className="card-text text-muted price">{relatedDefPrice}</p></small>
            <small><p className="card-text text-muted price">{relatedStyleOriginalPrice} &nbps; &nbsp; {relatedStyleSalePrice}</p></small>
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
