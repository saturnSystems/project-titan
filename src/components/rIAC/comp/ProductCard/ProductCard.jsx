// this component is for use in RIAC.jsx
import React from 'react';
// import Container from 'react-bootstrap/Container'; // NEVER USED
// import Card from 'react-bootstrap/Card'; // NEVER USED
// import CardDeck from 'react-bootstrap/CardDeck'; // NEVER USED

import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' // NOT YET USED
import StarRatings from "react-star-ratings";
import noImage from "./NoImageOnFile.jpg";
// import noStyles from "./NoStylesOnFile.jpg"; // NEVER USED
import "./ProductCard.css";
import ProductComparison from '../ProductComparison/ProductComparison';


// props as defined in calling parent
//   setProductId  ={this.props.setProductId}
//   currentProduct  ={this.props.currentProduct} USED ONLY FOR DEBUGGING
//   relatedProductId  ={relatedProductId}


const helper = require("../../../../helper/helper.js");

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      relatedProduct: null, // change over time, requiring re-render
      relatedStyles: null, // change over time, requiring re-render
      relatedReviewRating: null, // change over time, requiring re-render
      compareProductsNow: false
    }

    // NO NEED TO BIND WHEN I HAVE <this>
    // arrow function; current this (that does not need to be overriden)
  }
  
  componentDidMount() {
    // let relatedProductId = this.props.relatedProductId  // NEVER USED
    // console.log("+PC: cDM: if cRPId: ", relatedProductId)
    this.loadRelatedProductData();
  }

  // Strictly speaking, not needed. KEEPT FOR DEBUGGING OR IF NEEDED
  componentDidUpdate = (prevProps, prevState) => {
    // console.log("PC: cDU: rPI: ", this.props.relatedProductId);
    if (prevProps.relatedProductId !== this.props.relatedProductId) {
      this.loadRelatedProductData();
    }
  }
  
  loadRelatedProductData = () => {
    helper.getOneProduct(this.props.relatedProductId, result => {
      // console.log("PC: lRPD: gOP: result: " , result)
      this.setState({
        relatedProduct: result
      });
    });
    helper.getOneProductStyle(this.props.relatedProductId, result => {
      this.setState({
        relatedStyles: result.results
      });
    });

    helper.getReviewMetadata(this.props.relatedProductId, result => {
      this.setState({
        relatedReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
  }
  
  setProductId = () => { 
    this.props.setProductId(this.props.relatedProductId);
  }

  closeComparison = (event) => { 
    event.stopPropagation();
    this.setState({
      compareProductsNow: false
    });
  }

  // compareProducts = (event, currentProductId, relatedProductId) => { // React won't use Arg1, Arg2
  compareProducts = (event) => {
    event.stopPropagation();
    this.setState({
      compareProductsNow: true
    });
  }

    // Pre-method check if ready to render or null
    // function method
  isReadytoRender = () => {
    return (
      this.state.relatedProduct !== null &&
      this.state.relatedStyles !== null &&
      this.state.relatedReviewRating !== null
    );
  }

  render() {
    // console.log("PC-DATE-TIME: render: ", new Date());

    // Pre-method check if ready to render or null

    // Explicit method
    // if (this.state.relatedProduct === null) return null;
    // if (this.state.relatedStyles === null) return null;
    // if (this.state.relatedReviewRating === null) return null;

    // function method
    if (!this.isReadytoRender()) return null;

    const { relatedProduct, relatedStyles, relatedReviewRating } = this.state;

    // console.logs for DEBUGGING

    // console.log("PC: cP: ", currentProduct); // used only for debugging
    // console.log("PC: rPId: ", this.props.relatedProductId);
    // console.log("PC: rP: ", relatedProduct);
    // console.log("PC: rSs: ", relatedStyles);

    let relatedCategory = relatedProduct.category || null;
    // console.log("PC: rCat: ", relatedCategory);

    let relatedCaption = relatedProduct.name ? relatedProduct.name : null;
    // let relatedCaption = (relatedProduct.name === undefined || relatedProduct.slogan === undefined) ? null : relatedProduct.name + ' - ' + relatedProduct.slogan;
    // console.log("PC: rCap: ", relatedCaption);

    let relatedDefPrice = relatedProduct.default_price || null; // SUPERCEDED BY style data
    // console.log("PC: rDP: ", relatedDefPrice);

    // QQQQ is this appropriate: noDefault => 0;

    // let relatedStyle = relatedStyles.find(style => style["default?"] === 1) || relatedStyles[0];
    let relatedStyle = relatedStyles.find(style => style["default?"] === 1) || relatedStyles[0];
        // console.log("PC: rS: ", relatedStyle);

    // let relatedStylesIndex = 2; // HARD CODED - FALLBAK
    let relatedStyleOriginalPrice = relatedStyle.original_price || null;
    // console.log("PC: rStyleOPrice: ", relatedStyleOriginalPrice);

    let relatedStyleSalePrice = relatedStyle.sale_price || relatedDefPrice;
    // console.log("PC: rStyleSPrice: ", relatedStyleSalePrice);

    let relatedStyleImage = relatedStyle.photos[0].url || noImage;
    // console.log("PC: rSI: ", relatedStyleImage);

    // console.log("PC: render: rRR: ", relatedReviewRating);

    return (
      <Container-fluid class="layout product-card-layout align-left">
        <div id="product-card-div" onClick={this.setProductId}>
          <div>
            <div className="card mb-3 style-image">            
              <img className="card-img-top" src={relatedStyleImage}  alt="Display this style"/>
              {/* <img className="card-img-top" src={"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}  alt=""/> */}
              <div className="card-img-overlay">
                <small><p className="btn btn-primary btn-star" onClick={this.compareProducts}>&#x2605;</p></small>
                {/* {this.state.compareProductsNow ? "Some text" : "No text"} */}
                {this.state.compareProductsNow && (
                    <ProductComparison 
                      currentProductId={this.props.currentProduct.id}
                      relatedProductId={this.props.relatedProductId} 
                      closeComparison={this.closeComparison}                  
                    />  
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">          
          <p className="card-text category">{relatedCategory}</p>
          <h5 className="card-title pc-caption">{relatedCaption}</h5>
          <small><p className="card-text text-muted price">${relatedStyleSalePrice} &nbsp; &nbsp; <del>${relatedStyleOriginalPrice}</del></p></small>
            <Row className="rating-stars">              
              <StarRatings
                rating={relatedReviewRating}
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
