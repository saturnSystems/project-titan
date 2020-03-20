// this component is for use in RIAC.jsx
//   for both Related Products and Your Outfit
import React from 'react';
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' // NOT USED
import StarRatings from "react-star-ratings";
import "./NoImageOnFile.jpg";
// props
//   setProductId={this.props.setProductId}
//   currentProduct={this.props.currentProduct}
//   relatedProductId={relatedProductId}


const helper = require("../../../../helper/helper.js");

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      // relatedProductId: props.relatedProductId, // USED as "stat"?? 
      relatedProduct: {}, // change over time, requiring re-render
      relatedStyle: null, // change over time, requiring re-render
      relatedReviewRating: null, // change over time, requiring re-render
      relatedStyleOriginalPrice: null,
      relatedStyleSalePrice: null

    }

    this.scrollToTop = this.scrollToTop.bind(this);

  }
  
  componentDidMount() {
    let relatedProductId = this.props.relatedProductId
    console.log("+PC: cDM: if cRPId: ", relatedProductId)
    this.loadRelatedProductData();
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   // console.log("+++++PC: cDU: rPI: ", relatedProductId);
  //   if (prevState.relatedProductId !== this.state.relatedProductId) {
  //     this.loadRelatedProductData();
  //   }
  // }
  
  loadRelatedProductData = (relatedProductId) => {
  // loadRelatedProductData = () => {
    // console.log("PC: lRPD: t.s.rP: ", this.state.relatedProduct)
    console.log("++PC: lRPD: t.p.rPI: ", this.props.relatedProductId)
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
    console.log("+++PC: lRPD: t.s.rSs: ", this.state.relatedStyles)

    helper.getReviewMetadata(this.props.relatedProductId, result => {
      this.setState({
        relatedReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
    console.log("PC: lRPD: t.s.rRR: ", this.state.relatedReviewRating)
  }
  
  setRelatedProductId = (newRelatedProductId) => { // (event) parameter not actually used
    this.props.setProductId(this.props.relatedProductId);
  }

  setProductId = () => { // (event) parameter not actually used
    this.props.setProductId(this.props.relatedProductId);
  }

  scrollToTop () {
    window.scrollTo(0, 0);
  }

  render() {
    // if (this.props.relatedProductId !== undefined) {
    // }

    console.log("PC-DATE-TIME: render: ", new Date());
    console.log("PC: render: t.p.rPId: ", this.props.relatedProductId);
    // console.log("PC: render: t.s.rPId: ", this.props.relatedProductId);    
    let relatedProductId = this.props.relatedProductId;
    if (relatedProductId !== undefined) { // FURTHER ACTION REQUIRED

      console.log("PC: render: rPId: ", relatedProductId);
      
      // this.loadRelatedProductData();

      // let currentProduct = this.props.currentProduct; // NOT USED
      // console.log("PC: cP: ", currentProduct);
      // let relatedProductId = this.props.relatedProductId; // NOT USED
      // console.log("PC: rPId: ", relatedProductId);
      let relatedProduct = this.state.relatedProduct;
      if (relatedProduct.id === undefined) {
        // relatedProduct = null;
        return null;
      } // FURTHER ACTION REQUIRED
      console.log("PC: rP: ", relatedProduct);

      let relatedCategory = relatedProduct.category;
      if (relatedProduct.category === undefined) relatedCategory = null; // FURTHER ACTION REQUIRED
      console.log("PC: rCat: ", relatedCategory);

      let relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
      if (relatedProduct.name === undefined || relatedProduct.slogan === undefined) relatedCaption = null; // FURTHER ACTION REQUIRED
      console.log("PC: rCap: ", relatedCaption);

      let relatedDefPrice = relatedProduct.default_price;
      if (relatedDefPrice === undefined) relatedDefPrice = null; // FURTHER ACTION REQUIRED
      console.log("PC: rDP: ", relatedDefPrice);

      // let relatedRating = "***"; // NOT USED. Superceded by actual star rating
      
      // let styles = this.state.styles;
      // console.log("PC: render: t.s.rS: ", this.state.relatedStyles);   
      let relatedStyles = this.state.relatedStyles;
      if (relatedStyles === undefined) return null; // FURTHER ACTION REQUIRED
      if (relatedStyles.length <= 0) return null; // FURTHER ACTION REQUIRED
      console.log("PC render: rSs: ", relatedStyles);

      // does it ever log after teh state being set or is it always before
      // if (this.state.relatedStyles === undefined) return null;

      console.log("PC: rSs[0]: ", relatedStyles[0]);

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


      // let temp = relatedStyles.filter(index => relatedStyles.indexOf(relatedStyles.results[index]["default?"] === 1));
      // console.log(temp);

      // let defaultStyleIndex = relatedStyles.indexOf(relatedStyles.filter(style => style.results[index]["default?"] === 1));
      // if (defaultStyleIndex === undefined) defaultStyleIndex = null; // FURTHER ACTION REQUIRED
      
      // console.log("PC: dSIx: ", defaultStyleIndex);

      let relatedStylesIndex = 2; // HARD CODED
      // let relatedStylesIndex = defaultStyleIndex;
      // let relatedStyle = this.state.relatedStyle;
      let relatedStyle = relatedStyles[relatedStylesIndex];
      if (relatedStyle === undefined) relatedStyle = null; // FURTHER ACTION REQUIRED
      console.log("PC: rS: ", relatedStyle);

      let relatedStyleOriginalPrice = relatedStyle.original_price || null;

      // this.setState({
      //   relatedStyleOriginalPrice: relatedStyle.original_price || null
      // });

      if (relatedStyle === undefined) relatedStyle = null; // FURTHER ACTION REQUIRED
      console.log("PC: rS: ", relatedStyle);
      let relatedStyleSalePrice = relatedStyle.sale_price || null;
      if (relatedStyleSalePrice === undefined) relatedStyle = null; // FURTHER ACTION REQUIRED
      console.log("PC: rStyle: ", relatedStyleSalePrice);

      // this.setState({
      //   relatedStyleSalePrice: relatedStyle.relatedStyleSalePrice || null
      // });


      console.log("PC: rS.p: ", relatedStyle.photos);

      let relatedStyleImage = relatedStyle.photos[0].url || null;
      if (relatedStyleImage === undefined) relatedStyle = null; // FURTHER ACTION REQUIRED
      console.log("PC: rSI: ", relatedStyleImage);

      // let relatedStyles[i].relatedProductId = relatedProductId || null;
      // let relatedStyles[i].index = defaultStyleIndex || null;
      // let relatedStyles[i].style = this.state.style || null;
      // let relatedStyles[i].original_price = this.state.styles[defaultStyleIndex].original_price || null;
      // let relatedStyles[i].sale_price = this.state.styles[defaultStyleIndex].sale_price || null;
      // let  relatedStyles[i].image = this.state.styles[defaultStyleIndex].photos[o].url || null;

        

      // let relatedTNStylesIndex = 1; // HARD CODED
      // let relThumbnail = "./NoImageOnFile.jps"; // fallback
      let relatedThumbnailIndex = 0; // HARD CODED
      // if (this.state.relatedStyles[relatedStylesIndex] !== undefined) { // needed, but WHY?
        // relThumbnail = relatedStyle.photos[relatedThumbnailIndex].thumbnail_url;
      // }

      // let relatedReviewRating = this.props.reviewRating; // NOT USED
      let relatedReviewRating = this.state.relatedReviewRating
      console.log("PC: render: rRR: ", relatedReviewRating);
      // if (relatedReviewRating === undefined) relatedReviewRating = null; // FURTHER ACTION REQUIRED
      if (relatedReviewRating === null) return null; // FURTHER ACTION REQUIRED
      console.log("PC: render: rRR: ", relatedReviewRating);
    } else {
      const noRelatedProductId = "noRelatedProductId";
      // return (<div>{noRelatedProductId}</div>);
      return (null);
    }

    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div id="product-card-div" onClick={() =>this.setProductId()}>
          <div onClick={this.scrollToTop}>
            <div className="card mb-3">
            
              {/* <img className="card-img-top" src={"relatedStyleImage"}  alt=""/> */}
              <img className="card-img-top" src={"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}  alt=""/>
              <div className="card-img-overlay">
                <p className="btn btn-primary">&#2605;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
          
          {/* <p className="card-text category">{relatedCategory}</p> */}
          <p className="card-text category">{this.state.relatedProduct.category}</p>
            <h5 className="card-title caption">{this.state.relatedProduct.relatedCaption}</h5>
            {/* <small><p className="card-text text-muted price">{this.state.relatedProduct.relatedDefPrice}</p></small>
            <small><p className="card-text text-muted price">{this.state.relatedStyleOriginalPrice} &nbps; &nbsp; {this.state.relatedStyleSalePrice}</p></small> */}
            <small><p className="card-text text-muted price">{"$999999"}</p></small>
            <small><p className="card-text text-muted price">{"OriginalPrice"} &nbps; &nbsp; {"SalePrice"}</p></small>
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
