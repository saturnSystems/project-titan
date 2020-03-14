import React from "react";
import "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarRatings from "react-star-ratings";
import Button from "react-bootstrap/Button";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    for (let i = 0; i < this.props.styles.length / 4; i++) {
      storage.push(
        <Row className="layout">
          {this.props.styles.slice(4 * i, 4 * i + 4).map((each, i) => (
            <Button key={i} onClick={()=>this.setStyle(each)}>{each.name}</Button>
          ))}
        </Row>
      );
    }
    return storage;
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
                />{" "}
                Read all reviews
              </Row>
              <Row className="layout">{this.props.product.category}</Row>
              <Row className="layout">{this.props.product.name}</Row>
              <Row className="layout">${this.props.product.default_price}</Row>
              <Row className="layout">STYLE > {this.state.currentStyle&&this.state.currentStyle.name}</Row>
              <Row className="layout">
                <Col className="layout">
                  {this.props.styles &&
                    this.conditionalStyles().map((each, i) => (
                      <div key={i}>{each}</div>
                    ))}
                </Col>
              </Row>
              <Row className="layout">SELECT SIZE | 1</Row>
              <Row className="layout">ADD TO BAG | *</Row>
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
                    &#10003; {each.feature}: {each.value}
                  </Row>
                ))}
            </Col>
          </Row>
        </Col>
      </Container-fluid>
    );
  }
}
export default Overview;
