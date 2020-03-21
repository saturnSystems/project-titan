// this component is for use in RIAC.jsx
import React from 'react';
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' // NOT USED
import StarRatings from "react-star-ratings";
import "./NoImageOnFile.jpg";
// props
//   setProductId={this.props.setProductId}
//   currentProduct={this.props.currentProduct} // QQQQ USED ONLY FOR DEBUGGING
//   relatedProductId={relatedProductId}


const helper = require("../../../../helper/helper.js");

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      relatedProduct: {}, // change over time, requiring re-render
      relatedStyles: null, // change over time, requiring re-render
      relatedReviewRating: null, // change over time, requiring re-render
      relatedStyleOriginalPrice: null,
      relatedStyleSalePrice: null
    }

    // QQQQ do we need this?
    this.loadRelatedProductData = this.loadRelatedProductData.bind(this);
    this.setProductId = this.setProductId.bind(this);
  }
  
  componentDidMount() {
    let relatedProductId = this.props.relatedProductId
    // console.log("+PC: cDM: if cRPId: ", relatedProductId)
    this.loadRelatedProductData();
  }

  // QQQQ needed??

  componentDidUpdate = (prevProps, prevState) => {
    // console.log("PC: cDU: rPI: ", relatedProductId);
    if (prevState.relatedProductId !== this.state.relatedProductId) {
      this.loadRelatedProductData();
    }
  }
  
  loadRelatedProductData = (relatedProductId) => {
    // console.log("PC: lRPD: t.s.rP: ", this.state.relatedProduct)
    // console.log("++PC: lRPD: t.p.rPI: ", this.props.relatedProductId)
    helper.getOneProduct(this.props.relatedProductId, result => {
      this.setState({
        relatedProduct: result
      });
    });
    helper.getOneProductStyle(this.props.relatedProductId, result => {
      this.setState({
        relatedStyles: result.results
      });
    });
    // console.log("+++PC: lRPD: t.s.rSs: ", this.state.relatedStyles)

    helper.getReviewMetadata(this.props.relatedProductId, result => {
      this.setState({
        relatedReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
    // console.log("PC: lRPD: t.s.rRR: ", this.state.relatedReviewRating)
  }
  
  setProductId = () => { // QQQQ (event) or (rPI) parameter used?
    this.props.setProductId(this.props.relatedProductId);
    // console.log("PC: sPId: t.p.rPId: ", this.props.relatedProductId);
  }

  render() {
    // if (this.props.relatedProductId !== undefined) return null;

    // console.log("PC-DATE-TIME: render: ", new Date());
    // console.log("PC: render: t.p.rPId: ", this.props.relatedProductId);
    // console.log("PC: render: t.s.rPId: ", this.props.relatedProductId);    
    let relatedProductId = this.props.relatedProductId;
    if (relatedProductId === undefined) {
      const noRelatedProductId = "noRelatedProductId"; // QQQQ
      // return (<div>{noRelatedProductId}</div>);
      return (null);
    }

      // console.log("PC: render: rPId: ", relatedProductId);
      
      // console.log("PC: cP: ", currentProduct); // used only for debugging
      let relatedProduct = this.state.relatedProduct;
      if (relatedProduct.id === undefined) { // QQQQ
        // relatedProduct = null;
        return null;
      } // FURTHER ACTION REQUIRED
      // console.log("PC: rP: ", relatedProduct);

      let relatedCategory = relatedProduct.category;
      if (relatedProduct.category === undefined) relatedCategory = null; // FURTHER ACTION REQUIRED
      // console.log("PC: rCat: ", relatedCategory);

      let relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
      if (relatedProduct.name === undefined || relatedProduct.slogan === undefined) relatedCaption = null; // FURTHER ACTION REQUIRED
      // console.log("PC: rCap: ", relatedCaption);

      let relatedDefPrice = relatedProduct.default_price;
      if (relatedDefPrice === undefined) relatedDefPrice = null; // FURTHER ACTION REQUIRED
      // console.log("PC: rDP: ", relatedDefPrice);

      let relatedStyles = this.state.relatedStyles;
      if (relatedStyles === null) return null; // FURTHER ACTION REQUIRED
      // if (relatedStyles.length <= 0) return null; // FURTHER ACTION REQUIRED
      // console.log("PC render: rSs: ", relatedStyles);

      // does it ever log after teh state being set or is it always before

      // console.log("PC: rSs[0]: ", relatedStyles[0]);

      // // names = searchWords.filter(x => students.indexOf(x) !== -1);
      // let defaultStyle = null;
      // for(let i = 0; i < this.props.styles.length; i++) {
      //   if(this.props.styles[i]["default?"]) {
      //     let defaultStyle = this.props.styles[i]
      //   }
      // }
      // this.setState({
      //   relatedStyle: defaultStyle || this.props.styles[0]
      // });

      let relatedStyle = relatedStyles.find(style => style["default?"] === 1) || relatedStyles[0];
      // if (defaultStyleIndex === undefined) defaultStyleIndex = null; // FURTHER ACTION REQUIRED
      
      // console.log("PC: rS: ", relatedStyle);

      // let relatedStylesIndex = 2; // HARD CODED
      let relatedStyleOriginalPrice = relatedStyle.original_price || null;
      // console.log("PC: rStyleOPrice: ", relatedStyleOriginalPrice);

      let relatedStyleSalePrice = relatedStyle.sale_price || null;
      if (relatedStyleSalePrice === undefined) relatedStyle = null; // FURTHER ACTION REQUIRED
      // console.log("PC: rStyleSPrice: ", relatedStyleSalePrice);

      let relatedStyleImage = relatedStyle.photos[0].url || null;
      if (relatedStyleImage === undefined) relatedStyle = null; // FURTHER ACTION REQUIRED
      // console.log("PC: rSI: ", relatedStyleImage);

      // let relThumbnail = "./NoImageOnFile.jps"; // QQQQ FALLBACK
      // let relatedThumbnailIndex = 0; // HARD CODED FALLBACK

      let relatedReviewRating = this.state.relatedReviewRating
      // console.log("PC: render: rRR: ", relatedReviewRating);
      // if (relatedReviewRating === undefined) relatedReviewRating = null; // FURTHER ACTION REQUIRED
      if (relatedReviewRating === null) return null; // FURTHER ACTION REQUIRED
      // console.log("PC: render: rRR: ", relatedReviewRating);

    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div id="product-card-div" onClick={this.setProductId}>
          <div>
          {/* <div id="product-card-div" onClick={
            () => 
            this.scrollToTop();
            this.setProductId(relatedProductId)
          }>
            <div onClick={this.scrollToTop}> */}
            <div className="card mb-3">
            
              <img className="card-img-top style-image" src={relatedStyleImage}  alt="Related Style (No image available)"/>
              {/* <img className="card-img-top" src={"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}  alt=""/> */}
              <div className="card-img-overlay">
                <small><p className="btn btn-primary btn-star">&#x2605;</p></small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
          
          <p className="card-text category">{relatedCategory}</p>
          <h5 className="card-title caption">{relatedCaption}</h5>
          <small><p className="card-text text-muted price">${relatedStyleOriginalPrice} &nbsp; &nbsp; ${relatedStyleSalePrice}</p></small>
            <Row>              
              <StarRatings
                rating={this.state.relatedReviewRating}
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
