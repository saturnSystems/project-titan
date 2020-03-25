// this component is for use in RIAC.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' // NOT YET USED

import "./ProductComparison.css";

// props as defined in calling parent
//   currentProductId  ={this.props.currentProductId}
//   relatedProductId  ={relatedProductId}
//   closeComparison   ={this.closeComparison


const helper = require("../../../../helper/helper.js");

class ProductComparison extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      currentProduct: null, // change over time, requiring re-render
      relatedProduct: null, // change over time, requiring re-render
    }

  }
  
  componentDidMount() {
    let currentProductId = this.props.currentProductId
    let relatedProductId = this.props.relatedProductId
    console.log("+PC: cDM: cPId: ", currentProductId)
    console.log("+PC: cDM: cRPId: ", relatedProductId)
    this.loadProductData();
  }

  // Strictly speaking, not needed. KEEPT FOR DEBUGGING OR IF NEEDED
  componentDidUpdate = (prevProps, prevState) => {
    // console.log("PC: cDU: rPI: ", this.props.relatedProductId);
    if (prevProps.relatedProductId !== this.props.relatedProductId ||
        prevProps.currentProductId !== this.props.currentProductId) {
      this.loadProductData();
    }
  }
  
  loadProductData = () => {
    helper.getOneProduct(this.props.currentProductId, result => {
      // console.log("PC: lRPD: gOP: result: " , result)
      this.setState({
        currentProduct: result
      });
    });
    helper.getOneProduct(this.props.relatedProductId, result => {
      // console.log("PC: lRPD: gOP: result: " , result)
      this.setState({
        relatedProduct: result
      });
    });
  }
  
    // Pre-method check if ready to render or null
    // function method
  isReadytoRender = () => {
    return (
      this.state.currentProduct !== null &&
      this.state.relatedProduct !== null
    );
  }

  render() {
    // console.log("PC-DATE-TIME: render: ", new Date());

    // Pre-method check if ready to render or null

    // Explicit method
    // if (this.state.currentProduct === null) return null;
    // if (this.state.relatedProduct === null) return null;

    // function method
    if (!this.isReadytoRender()) return null;

    const { currentProduct, relatedProduct } = this.state;

    // console.logs for DEBUGGING
    // console.log("PC: cPId: ", currentProduct.id); // used only for debugging
    // console.log("PC: cP: ", currentProduct); // used only for debugging
    // console.log("PC: rPId: ", relatedProductId);
    // console.log("PC: rP: ", relatedProduct);
    const currentProductName = currentProduct.name;
    const relatedProductName = relatedProduct.name;

    // console.log("PComp: typeof cP: ", currentProduct);

    const currentFeaturesArr = currentProduct.features || null;
    // console.log("PC: rCat: ", relatedCategory);
    const currentFeaturesArrLen = currentFeaturesArr.length

    const relatedFeaturesArr = relatedProduct.features || null;
    // console.log("PC: rCat: ", relatedCategory);
    const relatedFeaturesTempArr = relatedFeaturesArr.slice() || null;
    // const relatedFeaturesArrLen = relatedFeaturesArr.length

    const allFeaturesArr = [];
    
    for (let i = 0; i < currentFeaturesArr.length; i++) {
      // allFeaturesArr.push(currentFeaturesArr[i]);
      if (currentFeaturesArr[i].value === "null") currentFeaturesArr[i].value = null
      allFeaturesArr.push( 
        {
          feature: currentFeaturesArr[i].feature,
          currentValue: currentFeaturesArr[i].value
        }
      )
      for (let j = 0; j < relatedFeaturesTempArr.length; j++) {
        if (allFeaturesArr[i].feature === relatedFeaturesTempArr[j].feature) {
          if (relatedFeaturesTempArr[i].value === "null") relatedFeaturesTempArr[i].value = null
          allFeaturesArr[i].relatedValue = relatedFeaturesTempArr[j].value;
          relatedFeaturesTempArr.splice(j, 1);
          j--;
        } else {
          // allFeaturesArr[i].relatedValue = null;
          allFeaturesArr[i].relatedValue = null;
        }
      }
    }
    for (let j = currentFeaturesArrLen - 1; j < relatedFeaturesTempArr.length; j++) {
      if (relatedFeaturesTempArr[j].value === "null") relatedFeaturesTempArr[j].value = null
      allFeaturesArr.push( 
        {
          feature: relatedFeaturesTempArr[j].feature,
          // currentValue: null,
          currentValue: null,
          relatedValue: relatedFeaturesTempArr[j].value
        }
      )
    }

    // modal setup
    // const [show, setShow] = useState(false);
    const show = true;
    const setShow = () => {

    }

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
      

    // allFeaturesArr.map((feature, index) => { 
    //   <Row className="layout comparison-body" key={feature}> {
    //         return (
    //           <Table
    //         allFeaturesArr = {this.props.currentProduct}
    //         setProductId={this.props.setProductId}
    //         relatedProductId={relatedProductId}
    //       />
    //     }
    //     </Row>
    //   )
    // })


    return (
      // <Container-fluid class="layout product-card-layout align-left">
        <Modal className="comparison-body" show={show} onHide={handleClose} >
          <Modal.Header closeButton onClick={this.props.closeComparison}>
            <Modal.Title>Product Comparison</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive>
              <thead className="comparison-body">
                <tr>
                  <th>{currentProductName}</th>
                  <th>Feature</th>
                  <th>{relatedProductName}</th>
                </tr>
              </thead>
              <tbody className="comparison-body"> 
                {/* <tr className="cols">
                  <Row className="layout comparison-body"> { */}
                {
                    allFeaturesArr.map((feature, index) => {
                      console.log(feature)
                      return (
                        <tr className="cols layout comparison-body rows" key={index}>
                          <td>{allFeaturesArr[index].currentValue}</td>
                          <td>{allFeaturesArr[index].feature}</td>
                          <td>{allFeaturesArr[index].relatedValue}</td>
                        </tr>
                      )
                    })
                  }
                  {/* </Row> */}                
                {/* <tr>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr> */}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      // </Container-fluid>
    )
  }
}

export default ProductComparison;
