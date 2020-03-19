import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck"
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton"
import DropdownItem from "react-bootstrap/DropdownItem"
import {FacebookShareButton, TwitterShareButton, PinterestShareButton} from "react-share"
import {FacebookIcon,PinterestIcon,TwitterIcon} from "react-share";
import StarRatings from "react-star-ratings";
import ImageGallery from "react-image-gallery"
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Overview.css"

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex:0,
      fullscreen: false,
      megaZoom: false
    };
    this.defaultRadio = React.createRef()
    this.sizeSelector = React.createRef()
    this.carousel = React.createRef()
    this.radioLoaded=false
    this.stockLoaded=false
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      
      for(let i=0; i<this.props.styles.length; i++){
        if(this.props.styles[i]["default?"]){
          var defaultStyle=this.props.styles[i]
        }
      }
      this.setState({
        currentStyle: defaultStyle||this.props.styles[0]
      });
    }
    
    if(this.defaultRadio.current&&this.radioLoaded===false){
      this.defaultRadio.current.checked=true
      this.radioLoaded=true
    }

    if(this.state.currentStyle&&this.state.currentStyle.skus&&!this.stockLoaded){
      let sizes=Object.entries(this.state.currentStyle.skus)
      if(sizes.length<=1&&!sizes[0][1]){
        this.setState({
          outOfStock:true
        })
        this.stockLoaded=true
      }else{
        this.setState({
          outOfStock:false
        })
        this.stockLoaded=true
      }
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
    this.setState({
      currentStyle:style,
      size:null
    })
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
                htmlFor={each.style_id} 
                onClick={()=>this.setStyle(each)} 
                >{each.photos&&
                  <Form.Check.Input
                    ref={!this.props.styles[1].style_id?this.defaultRadio:each["default?"]?this.defaultRadio:null}                                                    
                    name="style" type="radio" 
                    id={each.style_id} 
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
    return <Form>{storage.map((each,i)=><div key={i}>{each}<br/></div>)}</Form>
  }

  conditionalSalePrice(){
    if(this.state.currentStyle&&(this.state.currentStyle.sale_price>0)){
      return (
        <div>
          <Row className="layout">
            <Col className="layout">
              ${this.state.currentStyle&&this.state.currentStyle.sale_price}
            </Col>
          </Row>
          <Row className="layout">
            <Col className="layout">
              <del style={{color:"red"}}>
                ${this.state.currentStyle&&this.state.currentStyle.original_price}
              </del>
            </Col>
          </Row>
        </div>
      )
    }else{
      return (
        <Row className="layout">
          <Col className="layout">
            ${this.state.currentStyle&&this.state.currentStyle.original_price}
          </Col>
        </Row>
      )
    }
  }

  conditionalPinterest(){
    if(this.state.currentStyle&&this.state.currentStyle.photos&&this.state.currentStyle.photos[0].url!==null){
      return(
      <PinterestShareButton url={window.location.href} media={this.state.currentStyle.photos[0].url}>
        <PinterestIcon size="1.5em"/>
      </PinterestShareButton>)
    }else{
      return(
      <PinterestShareButton url={window.location.href} media={"../../logo.png"}>
        <PinterestIcon size="1.5em"/>
      </PinterestShareButton>
      )
    }
  }

  setSize(size,quantity){
    this.setState({size:size,
    quantity:quantity||1,
    noSize: false
    })
  }

  conditionalSizeSelector(){
    if(this.stockLoaded){
      let sizes=Object.entries(this.state.currentStyle.skus)
      if(this.state.outOfStock){
        return <Button variant="outline-primary">OUT OF STOCK</Button>
      }else{
        return(
        <DropdownButton variant="outline-primary" title={this.state.size?`SIZE: ${this.state.size}`:"SELECT SIZE"} ref={this.sizeSelector}>
          {sizes.length===1&&!sizes[0][1]?<DropdownItem>OUT OF STOCK</DropdownItem>:sizes.map((size,i)=>(
            !!size[1]&&<DropdownItem key={i} onClick={()=>this.setSize(size[0])}>{size[0]}</DropdownItem>
          ))}
        </DropdownButton>
        )
      }
    }
  }

  conditionalQuantitySelector(){
    if(this.state.currentStyle&&this.state.currentStyle.skus){
      let sizes=this.state.currentStyle.skus
      if(!this.state.size){
        return <Button variant="outline-primary">-</Button>
      }else{
        let quantity=[]

        if(sizes[this.state.size]<15){
          for(let i=1;i<=sizes[this.state.size];i++){
          quantity.push(i)
          }
        }else{
          for(let i=1;i<=15;i++){
            quantity.push(i)
          }
        }
        
        return(
        <DropdownButton variant="outline-primary" title={this.state.quantity}>
          {quantity.map((number,i)=>(
            <DropdownItem key={i} onClick={()=>this.setSize(this.state.size, number)}>{number}</DropdownItem>
          ))}
        </DropdownButton>
        )
      }
    }
  }

  bagger(){
    if(this.state.size&&this.state.quantity){
      this.props.addToCart({
        product: this.props.product,
        style: this.state.currentStyle,
        size: this.state.size,
        quantity: this.state.quantity
      })
      this.setState({
        size:null,
        quantity:null
      })
    }else{
      this.setState({noSize:true})
      this.sizeSelector.current.firstChild.click()
    }
  }

  setCarousel(i){
    this.setState({
      carouselIndex:i
    })
    console.log(i)
  }

  conditionalImageGallery(){
    let photoArray=[]
    this.state.currentStyle&&this.state.currentStyle.photos.forEach((each,i)=>{
      photoArray.push({original:`${each.url}&${i}`, thumbnail:`${each.thumbnail_url}&h=300&${i}`})
    })
    if(photoArray.length-1<this.state.carouselIndex&&this.state.carouselIndex)
      {this.carousel.current&&this.carousel.current.slideToIndex(photoArray.length-1)}
    return (
      this.state.megaZoom?<div onClick={()=>this.zoomClick()} className="magnifier"><ReactImageMagnify 
      enlargedImagePosition="over" 
      imageStyle={{objectFit:"cover"}}
      enlargedImageStyle={{objectFit:"cover"}}
      {...{
        smallImage:{
          src:photoArray[this.state.carouselIndex].original,
          width: window.innerWidth,
          height: window.innerHeight*.92
        },
        largeImage:{
          src:photoArray[this.state.carouselIndex].original,
          width: window.innerWidth*2.5,
          height: window.innerHeight*.92*2.5
        }
      }}/></div>:
      <ImageGallery 
        ref={this.carousel}
        items={photoArray} 
        thumbnailPosition="left" 
        showPlayButton={false} 
        infinite={false} 
        startIndex={(photoArray.length-1<this.state.carouselIndex?0:this.state.carouselIndex)}
        onSlide={(currentIndex)=>this.setState({carouselIndex:currentIndex})}
        useBrowserFullscreen={false}
        onScreenChange={()=>this.setState({fullscreen:!this.state.fullscreen})}
        onClick={()=>this.zoomClick()}
        showBullets={this.state.fullscreen?true:false}
      />
    )
  }

  zoomClick(){
    if(this.state.megaZoom){
      this.setState({megaZoom:false,
      fullscreen:false},()=>this.carousel.current.toggleFullScreen())
    }else if(!this.state.fullscreen){
      this.carousel.current.toggleFullScreen()
    }else if(this.state.fullscreen){
      this.setState({megaZoom:true})
    }
  }

  render() {
    return (
      <Container-fluid>
        <Col className="layout overview">
          <Row className="layout">
            <Col sm={this.state.fullscreen?12:8} className="layout" style={{padding:"0"}} id="carousel">
              {this.conditionalImageGallery()}
            </Col>
            <Col sm={4} className="layout" id="details" style={{height:"92.11vh"}}>
              <Row className="layout">
                <Col className="layout">
                  {this.conditionalReviews()}
                </Col>
              </Row>
              <Row className="layout"><Col className="layout">{this.props.product.category}</Col></Row>
              <Row className="layout"><Col className="layout"><h1>{this.props.product.name}</h1></Col></Row>
              <br/>
              {this.conditionalSalePrice()}
              <br/>
              <Row className="layout">
                <Col className="layout"><b>STYLE ></b> {this.state.currentStyle&&this.state.currentStyle.name}</Col>
              </Row>
              <br/>
              <Row className="layout">
                <Col className="layout">
                  {this.conditionalStyles()}
                </Col>
              </Row>
              {this.state.noSize&&<Row className="layout"><Col className="layout">Please select size</Col></Row>}
              <Row className="layout">
                <Col className="layout" sm={8}>{this.conditionalSizeSelector()}</Col>
                <Col className="layout" sm={4}>{this.conditionalQuantitySelector()}</Col>
              </Row>
              <br/>
              <Row className="layout">
                <Col className="layout" sm={9}>{!this.state.outOfStock&&<Button variant="outline-primary" onClick={()=>this.bagger()}>ADD TO BAG</Button>}</Col>   
              <Col className="layout" style={{margin:"auto"}}>
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon size="1.5em"/>
                </FacebookShareButton>
                {this.conditionalPinterest()}
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon size="1.5em"/>
                </TwitterShareButton>
              </Col>
              </Row>
            </Col>
          </Row>
          <br></br>
          <Row className="layout">
            <Col className="layout" sm={{ span: 7, offset: 1 }}>
              <Row className="layout"><b>{this.props.product.slogan}</b></Row>
              <br/>
              <Row className="layout">{this.props.product.description}</Row>
            </Col>
            <Col className="layout" sm={3}>
              {this.props.product.features &&
                this.props.product.features.map((each, i) => (
                  <Row className="layout" key={i}>
                    <b>&#10003;&nbsp;</b>{each.feature}{each.value!=='null'?`: ${each.value}`:null}
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