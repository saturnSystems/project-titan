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
      relatedProductId: props.relatedProductId, // USED as "stat"?? 
      relatedProduct: {},
      relatedStyles: [],
      relatedReviewRating: 0
    }
  }
  //   let relatedProductId = props.relatedProductId
  //   // console.log("+++++PC: cDM: if cRPId: ", relatedProductId)
  //     helper.getOneProduct(props.relatedProductId, result => { // HARD CODED
  //       // this.setState({
  //       //   relatedProduct: result
  //         this.state.relatedProduct = result
  //         // });
  //     });  
  //     helper.getOneProductStyle(props.relatedProductId, result=>{
  //       console.log("++--++ PC: constructor: gOPS: result: ", result);
  //       // this.setState({
  //       //   relatedStyles: result.results
  //       // })
  //       this.state.relatedStyles = result.results;
  //     });
  //     helper.getReviewMetadata(this.state.productID, result => {
  //       // this.setState({
  //       //   currentReviewRating: helper.calculateReviewRating(result.ratings)
  //       // });
  //       this.state.currentReviewRating = helper.calculateReviewRating(result.ratings)

  //     });
  //     helper.getListReviews(this.state.productID, result => {
  //       // this.setState({
  //       //   reviews: result.results
  //       // });
  //       this.state.reviews = result.results;
  //     });    
  
  // }

  componentDidMount() {
    // let relatedProductId = this.props.relatedProductId
    // console.log("+++++PC: cDM: if cRPId: ", relatedProductId)
    helper.getOneProduct(this.state.relatedProductId, result => {
      this.setState({
        relatedProduct: result
      });
    });
    // this.loadRelatedProductData();
  }

  componentDidUpdate = (prevProps, prevState) => {
    // console.log("+++++PC: cDU: rPI: ", relatedProductId);
    if (prevState.relatedProductID !== this.state.relatedProductID) {
      this.loadRelatedProductData();
    }
  }

  //  componentDidMount() {
  //   let relatedProductId = this.props.relatedProductId
  //   // console.log("+++++PC: cDM: if cRPId: ", relatedProductId)
  //   if (typeof relatedProductId === 'number') {
  //     helper.getOneProduct(this.props.relatedProductId, result => { // HARD CODED
  //       this.setState({
  //         relatedProduct: result
  //       });
  //     });  
  //     helper.getOneProductStyle(this.props.relatedProductId, result=>{
  //       // console.log("++--++ PC: cDM: gOPS: result: ", result);
  //       this.setState({
  //         relatedStyles: result.results
  //       })
  //     });
  //     helper.getReviewMetadata(this.props.relatedProductId, result => {
  //       this.setState({
  //         currentReviewRating: helper.calculateReviewRating(result.ratings)
  //       });
  //     });
  //     helper.getListReviews(this.props.relatedProductId, result => {
  //       this.setState({
  //         reviews: result.results
  //       });
  //     });    
  //   }
  // }
  
  // componentDidUpdate(prevProps) {
  //   let relatedProductId = this.props.relatedProductId
  //   if (typeof relatedProductId === 'number' && relatedProductId !== prevProps.relatedProductId) {
  //   // console.log("PC: cDU: cRPId: ", relatedProductId)
  //     helper.getOneProduct(this.props.relatedProductId, result => { // HARD CODED
  //       this.setState({
  //         relatedProduct: result
  //       });
  //     });  
  //     helper.getOneProductStyle(this.props.relatedProductId, result=>{
  //       this.setState({
  //         relatedStyles: result.results
  //       })
  //     });
  //     helper.getReviewMetadata(this.state.productID, result => {
  //       this.setState({
  //         currentReviewRating: helper.calculateReviewRating(result.ratings)
  //       });
  //     });
  //     helper.getListReviews(this.state.productID, result => {
  //       this.setState({
  //         reviews: result.results
  //       });
  //     });
  //   }
  // }
  
  // loadRelatedProductData = (relatedProductId) => {
  loadRelatedProductData = () => {
    // helper.getOneProduct(this.state.relatedProductId, result => {
    //   this.setState({
    //     relatedProduct: result
    //   });
    // });
    // console.log("PC: lRPD: t.s.rP: ", this.state.relatedProduct)
    helper.getReviewMetadata(this.state.relatedProductId, result => {
      this.setState({
        relatedReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
    console.log("PC: lRPD: t.s.rRR: ", this.state.relatedReviewRating)
    // helper.getListReviews(this.state.productID, result => {
    //   this.setState({
    //     reviews: result.results
    //   });
    // });
    // helper.getListQuestions(this.state.productID, result => {
    //   // Q&A - Questions
    //   this.setState({
    //     questions: result.results
    //   });
    // });
    helper.getOneProductStyle(this.state.relatedProductId, result => {
      this.setState({
        relatedStyles: result.results
      });
    });
    console.log("PC: lRPD: t.s.rS: ", this.state.relatedStyles)
    // helper.getRelatedProducts(this.state.productID, result => {
    //   this.setState({
    //     relatedProducts: result
    //   });
    // });
  }

  setProductId = () => { // (event) parameter not actually used
    this.props.setProductId(this.props.relatedProductId);
  }

  render() {
    // if (this.props.relatedProductId !== undefined) {
    // }

    console.log("PC-DATE-TIME: render: ", new Date());
    console.log("PC: render: t.p.rPId: ", this.props.relatedProductId);
    // console.log("PC: render: t.s.rPId: ", this.state.relatedProductId);    
    let relatedProductID = this.props.relatedProductId;
    console.log("PC: render: rPId: ", relatedProductID);
    
    // this.loadRelatedProductData();

    console.log("PC: render: t.s.cRR: ", this.state.currentReviewRating);   
    let currentRevRating = this.state.currentReviewRating
   console.log("PC: render: cRR: ", currentRevRating);   

    // const currentProduct = this.props.currentProduct; // NOT USED
    // console.log("PC: cP: ", currentProduct);
    // const relatedProductId = this.props.relatedProductId; // NOT USED
    // console.log("PC: rPId: ", relatedProductId);

    const relatedProduct = this.state.relatedProduct;
    console.log("PC: rP: ", relatedProduct);
    const relatedCategory = relatedProduct.category;
    // console.log("PC: rCat: ", relatedCategory);
    const relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
    // console.log("PC: rCap: ", relatedCaption);
    const relatedDefPrice = relatedProduct.default_price;
    // console.log("PC: rDF: ", relatedDefPrice);
    // const relatedRating = "***"; // NOT USED. Superceded by actual star rating
    
    // const styles = this.state.styles;
    const styles = this.state.relatedSyles;
    console.log("PC render: s: ", styles);

    // console.log("PC: render: t.s.rS: ", this.state.relatedSyles);   
    // does it ever log after teh state being set or is it always before
    // if (this.state.relatedSyles === undefined) return null;
    // console.log("PC: render: t.s.rS: ", this.state.relatedSyles);   


    // // const relatedStyles = this.props.styles;
    //   console.log("PC: rPsSs[0]: ", relatedStyles[0])
    // const relatedStyles = this.state.relatedStyles;
    // console.log("PC: rSs: ", relatedStyles);
    // console.log("PC: rSs[0]: ", relatedStyles[0]);

    // const relatedStylesIndex = 1; // HARD CODED
    // const relatedStyle = relatedStyles[relatedStylesIndex];
    //   console.log("PC: rS: ", relatedStyle);
  
    // const relatedTNStylesIndex = 1; // HARD CODED
    let relThumbnail = "(NO IMAGE AVAILABLE)"; // fallback
    // const relatedThumbnailIndex = 0; // HARD CODED
    // if (this.state.relatedStyles[relatedStylesIndex] !== undefined) { // needed, but WHY?
    //   relThumbnail = relatedStyle.photos[relatedThumbnailIndex].thumbnail_url;
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
