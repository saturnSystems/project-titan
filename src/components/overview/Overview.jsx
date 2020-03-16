import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck"
import Button from "react-bootstrap/Button";
import {FacebookShareButton, TwitterShareButton, PinterestShareButton} from "react-share"
import {FacebookIcon,PinterestIcon,TwitterIcon} from "react-share";
import StarRatings from "react-star-ratings";
import "./Overview.css"


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.defaultRadio = React.createRef()
    this.loaded=false
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      var defaultStyle=[]
      for(let i=0; i<this.props.styles.length; i++){
        if(this.props.styles[i]["default?"]){
          defaultStyle=this.props.styles[i]
        }
      }
      this.setState({
        currentStyle:defaultStyle
      });
    }
    
    if(this.defaultRadio.current&&this.loaded===false){
      this.defaultRadio.current.checked=true
      this.loaded=true
    }
  }

  conditionalReviews() {
    if (this.props.numReviews) {
      return (
        <div>
          <StarRatings
            rating={this.props.reviewRating}
            starDimension={"1em"}
            starSpacing={"0"}
          />
          <Button variant="link" onClick={this.props.scroll}>
            Read all {this.props.numReviews} reviews
          </Button>
        </div>
      );
    } else {
      return <br />;
    }
  }

  setStyle(style){
    this.setState({currentStyle:style})
  }

  conditionalStyles() {
    let storage = [];
    let styles = this.props.styles
    while(styles.length%4){
      styles.push({})
    }
    for (let i = 0; i < styles.length / 4; i++) {
      storage.push(
        <Row className="layout" key={i}>
          {styles.slice(4 * i, 4 * i + 4).map((each, i) => (          
            <Col className="layout" key={i}>
              <FormCheck.Label 
                htmlFor={each.name} 
                onClick={()=>this.setStyle(each)} 
                >{each.photos&&
                  <Form.Check.Input
                    ref={each["default?"]?this.defaultRadio:null}                                                    
                    name="style" type="radio" 
                    id={each.name} 
                    style={{position:"absolute", right:"10%", top:0}}
                  >
                  </Form.Check.Input>
                }<span className="checkmark"></span>
                {each.photos&&       
                  <Image
                    style={{position:"relative", zIndex:-1}} 
                    src={`${each.photos[0].thumbnail_url}&h=300`} 
                    alt={`Thumbnail of ${this.props.product.name} in ${each.name} style`} 
                    roundedCircle 
                    fluid
                  >
                  </Image>
                }
              </FormCheck.Label>
            </Col>            
          ))}
        </Row>
      );
    }
    return <Form>{storage.map(each=>each)}</Form>
  }

  conditionalSalePrice(){
    if(this.state.currentStyle&&(this.state.currentStyle.sale_price>0)){
      return (
        <div>
          <Row className="layout">
            ${this.state.currentStyle&&this.state.currentStyle.sale_price}
          </Row>
          <Row className="layout">
            <del style={{color:"red"}}>
              ${this.state.currentStyle&&this.state.currentStyle.original_price}
            </del>
          </Row>
        </div>
      )
    }else{
      return (
        <Row className="layout">
          ${this.state.currentStyle&&this.state.currentStyle.original_price}
        </Row>
      )
    }
  }

  render() {
    return (
      <Container-fluid className="layout container">
        <Col className="layout container">
          <Row className="layout">
            <Col className="layout" sm={8}>
              IMAGE CAROUSEL
            </Col>
            <Col className="layout">
              <Row className="layout">
                <StarRatings
                  rating={this.props.reviewRating}
                  starDimension="1em"
                  starSpacing={"0"}
                />
                <Button variant="link" onClick={this.props.scroll}>
                  Read all {this.props.numReviews} reviews
                </Button>
              </Row>
              <Row className="layout">{this.props.product.category}</Row>
              <Row className="layout">{this.props.product.name}</Row>
              {this.conditionalSalePrice()}
              <Row className="layout">
                STYLE > {this.state.currentStyle&&this.state.currentStyle.name}
              </Row>
              <Row className="layout">
                <Col className="layout">
                  {this.conditionalStyles()}
                </Col>
              </Row>
              <Row className="layout">SELECT SIZE | 1</Row>
              <Row className="layout">ADD TO BAG | *</Row>
              <FacebookShareButton url={window.location.href}>
                <FacebookIcon size="1.5em"/>
              </FacebookShareButton>
              <PinterestShareButton url={window.location.href}>
                <PinterestIcon size="1.5em"/>
              </PinterestShareButton>
              <TwitterShareButton url={window.location.href}>
                <TwitterIcon size="1.5em"/>
              </TwitterShareButton>
            </Col>
          </Row>
          <br></br>
          <Row className="layout">
            <Col className="layout" sm={{ span: 7, offset: 1 }}>
              <Row className="layout">{this.props.product.slogan}</Row>
              <Row className="layout">{this.props.product.description}</Row>
            </Col>
            <Col className="layout" sm={3}>
              {this.props.product.features &&
                this.props.product.features.map((each, i) => (
                  <Row className="layout" key={i}>
                    &#10003; {each.feature}{each.value!=='null'?`: ${each.value}`:null}
                  </Row>
                ))
              }
            </Col>
          </Row>
        </Col>
      </Container-fluid>
    );
  }
}
export default Overview;
