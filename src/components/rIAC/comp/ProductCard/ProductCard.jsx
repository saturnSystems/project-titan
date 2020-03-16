// this component will go in RIAC.jsx
//   for use in both Related Products and Your Outfit
import React from 'react';
// import Row from 'react-bootstrap/Row'; // not yet used
// import Col from 'react-bootstrap/Col'; // not yet used
const helper = require("../../../../helper/helper.js");

// \project-titan\src\components\rIAC\comp\ProductCard\ProductCard.jsx
// \project-titan\src\helper\helper.js
class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      relatedProduct: {}
    }

  }

  componentDidMount() {

    if (this.props.relatedProductId !== undefined) {
  console.log("PC: cDM: t.p.rPId: ", this.props.relatedProductId)
    }
    // if (this.props.relatedProductId !== undefined) {
      // helper.getOneProduct(this.props.relatedProductId, result => {
        helper.getOneProduct(2, result => {
          this.setState({
            relatedProduct: result
          });
        });  
    // }

    // if (this.props.relatedProductId !== undefined) {
      // helper.getOneProductStyle(this.props.relatedProductId, result=>{
      helper.getOneProductStyle(2, result=>{
        this.setState({
          styles: result.results
        })
      });
    // }  
  }

  // const currentImage = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  // https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80
  // ProductCard body
  render() {
// console.log("PC: ENTER: t.p: ", this.props);

    const currentProduct = this.props.currentProduct;
// console.log("PC: cP: ", currentProduct);
    // const relProductId = this.props.relatedProductId;
    // console.log("PC: rP: ", relProductId);
////
    const relatedProductId = this.props.relatedProductId;

//     if (this.props.relatedProductId !== undefined) {
// console.log("PC: rPId: ", relatedProductId);
//     }
    const relatedProduct = this.state.relatedProduct;
// console.log("PC: t.s.rP: ", this.state.relatedProduct);
console.log("PC: rP: ", relatedProduct);
    // if (relatedProduct !== undefined && relatedProduct[relatedProductId] !== undefined) {
    //   console.log("PC: rP[rPId]: ", relatedProduct[relatedProductId] );
    // }
    // const relProduct = this.state.relatedProduct;
    // if (relProduct[0] !== undefined) {
    //   console.log("PC: rP: ", relProduct);
    // }
    const relatedCategory = relatedProduct.category;
    // console.log(relatedCategory);
    const relatedCaption = relatedProduct.name + ' - ' + relatedProduct.slogan;
    // console.log(relatedCaption);
    const relatedDefPrice = relatedProduct.default_price;
    // console.log(relatedDefPrice);
    const relatedRating = "***";
    // console.log(relatedRating);
    
    // if (this.props.styles[0] !== undefined) {
    //   console.log("PC: t.p.s: ", this.props.styles)
    // }
    const relatedPropsStyles = this.props.styles;
    if (relatedPropsStyles[0] !== undefined) {
      console.log("PC: rPsSs[0]: ", relatedPropsStyles[0])
    }
    if (this.state.styles !== undefined) {
      console.log("PC: t.s.s: ", this.state.styles)
    }
    const relatedStateStyles = this.state.styles;
    if (relatedStateStyles !== undefined) {
      console.log("PC: rSS: ", relatedStateStyles)
    }
    const relatedPropStyleIndex = 0;

    const relatedPropStyle = this.props.styles[relatedPropStyleIndex];
    if (relatedPropStyle !== undefined) {
      console.log("PC: rPS: ", relatedPropStyle);
    }
    if (this.state.styles !== undefined) {
      const relatedStateStyle = this.state.styles[relatedPropStyleIndex];
      console.log("PC: rSS: ", relatedStateStyle);
    }

    const relThumbnailIndex = 0;
    // const relThumbnail = relatedPropStyles[relatedPropStyleIndex].photos[relThumbnailIndex].thumbnail_url;
    let relThumbnail = "(NO IMAGE AVAILABLE)";

    // if (this.props.styles[0] !== undefined) {
      // relThumbnail = this.props.styles[0].photos[relThumbnailIndex].thumbnail_url;
      // relThumbnail = relatedPropsStyles[0].photos[relThumbnailIndex].thumbnail_url;
    // }

    if (this.state.styles !== undefined && this.state.styles[0] !== undefined) {
      // relThumbnail = this.state.styles[0].photos[relThumbnailIndex].thumbnail_url;
      // relThumbnail = this.state.styles[0].photos[0].thumbnail_url;
    }
    // console.log("PC: rT: ", relThumbnail)
    // const relCategory = relProduct.category;
    // const relCaption = relProduct.name + ' - ' + relProduct.slogan;

    // const relDefPrice = relProduct.default_price;

    // const relRating = relProduct.TBD;

    ////
    // console.log("PC: reviewRating: ", this.props.reviewRating)

    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div id="product-card-div">
          <a href="../../overview/Overview.jsx">
          <div className="card mb-3">
            <p>
              {}
              {/* <a className="card-link"> */}
                {/* <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Card image cap" /> */}
                <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" />
                {/* <img className="card-img-top" src={relThumbnail}  alt=""/> */}
                {/* <a href="../../overview/Overview.jsx"> <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Card image cap" />
                </a> */}
              {/* </a> */}
            </p>
            <div className="card-img-overlay">
              {/* <p><a href="../../overview/Overview.jsx" className="btn btn-primary">X</a></p> */}
              <small><p className="btn btn-primary">x</p></small>
            </div>
          </div>
        </a>
        </div>
        <div className="card">
          <div className="card-body">
          {/* <p className="card-text category">Jackets</p> */}
          {/* {const currCategory=this.props[0].category;} */}
          <p className="card-text category">{relatedCategory}</p>
            {/* <h5 className="card-title caption">Camo Onesie - Forest Green &amp; Black </h5> */}
            <h5 className="card-title caption">{relatedCaption}</h5>
            {/* <small><p className="card-text price" className="text-muted">$140</p></small> */}
            <small><p className="card-text text-muted price">{relatedDefPrice}</p></small>
            <p className="card-text">{relatedRating}</p>
          </div>
          {/* <img class="card-img-bottom" src="..." alt="Card image cap"> */}
        </div>
      {/* <Row className="layout">
        <Col  sm={{ span: 4 }} className="layout container align-left">
          <Row className="layout">IMAGE</Row>
          <Row className="layout category">CATEGORY</Row>
          <Row className="layout caption">
            Expanded Product Name with Extra Text
          </Row>
          <Row className="layout price">$123</Row>
          <Row className="layout stars">*****</Row>
        </Col>
      </Row> */}
      </Container-fluid>
    )
  }
}

export default ProductCard;
