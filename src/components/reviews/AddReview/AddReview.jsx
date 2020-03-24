import React, { Component } from "react";
import "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddReview.css";

const helper = require("../../../helper/helper.js");

export default class AddReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.productID,
      meta: [],
      overalRating: 0,
      recommend: null,
      Characteristics: [],
      Fit: "",
      Size: "",
      Length: "",
      Comfort: "",
      Quality: "",
      Width: "",
      summary: "",
      body: "",
      nickname: "",
      email: "",
      ShowModal: true
    };
  }

  CloseModal = () => {
    this.setState({
      ShowModal: false
    });
  };

  componentDidMount() {
    const { productId } = this.state;

    helper.getReviewMetadata(productId, results =>
      // eslint-disable-next-line implicit-arrow-linebreak
      this.setState({
        meta: results,
        Characteristics: Object.keys(results.characteristics),
        // fit: results.characteristics.Fit,
        size: results.characteristics.Size ? results.characteristics.Size : 0
      })
    );
  }

  handleSubmit = () => {
    const { productId } = this.state;
    const { summary } = this.state;
    const { overalRating } = this.state;
    const { recommend } = this.state;
    const { nickname } = this.state;
    const { body } = this.state;
    const { email } = this.state;
    const { Fit } = this.state;
    const { Size } = this.state;
    const { Length } = this.state;
    const { Width } = this.state;
    const { Comfort } = this.state;
    const { Quality } = this.state;

    let review = {
      rating: parseInt(overalRating),
      summary: summary,
      body: body,
      recommend: recommend.toLowerCase() == "true" ? true : false, // make a boolean
      name: nickname,
      email: email,
      photos: [],
      characteristics: {
        Fit: parseInt(Fit),
        Size: parseInt(Size),
        Length: parseInt(Length),
        Width: parseInt(Width),
        Comfort: parseInt(Comfort),
        Quality: parseInt(Quality)
      }
    };
    helper.postReview(productId, review, () => console.log("Sent!", review));
  };

  handleRating = e => {
    // console.log(e.target.value);
    this.setState({ overalRating: e.target.name });
  };

  handleCharacteristics = e => {
    console.log();
    this.setState({ [e.target.id]: e.target.name });
  };

  handleInput = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecommend = e => {
    // console.log(e.target.name);
    this.setState({ recommend: e.target.name }); // Boolean.parseBoolean
  };

  // ErrorValidationLabel = ({ txtLbl }) => (
  //   <label htmlFor="" style={{ color: "red" }}>
  //     {txtLbl}
  //   </label>
  // );
  render() {
    const { Characteristics } = this.state;
    const { email } = this.state;
    const { body } = this.state;
    const { summary } = this.state;
    const { nickname } = this.state;

    const isEnabled =
      email.length > 5 &&
      body.length > 50 &&
      summary.length < 60 &&
      nickname.length < 60 &&
      body.length < 1000;
    return (
      <Modal size="lg" show={this.state.ShowModal}>
        <ModalHeader>
          <h2>Write Your Review</h2>
          <h3>About the {this.props.productName}</h3>
        </ModalHeader>
        <ModalTitle />
        <Form>
          <dl className="paddy">
            <Form.Label>
              <b>Overall Rating:</b>

              {["checkbox"].map(type => (
                <div key={`inline-${type}`} required className="mb-3">
                  <Form.Check
                    inline
                    name="1"
                    onClick={this.handleRating}
                    label="1 Star - Poor"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    name="2"
                    onClick={this.handleRating}
                    label="2 Star - Fair"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    name="3"
                    onClick={this.handleRating}
                    label="3 Star - Average"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    name="4"
                    onClick={this.handleRating}
                    label="4 Star - Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    name="5"
                    onClick={this.handleRating}
                    label="5 Star - Great"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}

              <b>Do You Recommend This Product?:</b>
              {["checkbox"].map(type => (
                <div key={`inline-${type}`} required className="mb-3">
                  <Form.Check
                    inline
                    onClick={this.handleRecommend}
                    name="Yes"
                    label="Yes"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    onClick={this.handleRecommend}
                    name="No"
                    label="No"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
              <b>Characteristics:</b>
            </Form.Label>
            {Characteristics.map(item => (
              <div key={`inline-${item}`} required className="mb-3">
                <Form.Label>
                  <b>{item}</b>
                </Form.Label>
                <br />
                {item === "Fit" ? (
                  <dl>
                    <Form.Check
                      inline
                      name="1"
                      onClick={this.handleCharacteristics}
                      label="1 - Runs tight"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="2"
                      onClick={this.handleCharacteristics}
                      label="2 - Rus slightly light"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="3"
                      onClick={this.handleCharacteristics}
                      label="3 - Perfect"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="4"
                      onClick={this.handleCharacteristics}
                      label="4 - Rus slightly long"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="5"
                      onClick={this.handleCharacteristics}
                      label="5 - Runs long"
                      type="checkbox"
                      id={item}
                    />
                  </dl>
                ) : null}
                {item === "Length" ? (
                  <dl>
                    <Form.Check
                      inline
                      name="1"
                      onClick={this.handleCharacteristics}
                      label="1 - Runs short"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="2"
                      onClick={this.handleCharacteristics}
                      label="2 - Runs slightly short"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="3"
                      onClick={this.handleCharacteristics}
                      label="3 - Perfect"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="4"
                      onClick={this.handleCharacteristics}
                      label="4 - Runs slightly long"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="5"
                      onClick={this.handleCharacteristics}
                      label="5 - Runs long"
                      type="checkbox"
                      id={item}
                    />
                  </dl>
                ) : null}
                {item === "Comfort" ? (
                  <dl>
                    <Form.Check
                      inline
                      name="1"
                      onClick={this.handleCharacteristics}
                      label="1 - Uncomfortable"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="2"
                      onClick={this.handleCharacteristics}
                      label="2 - slightly uncomfortable"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="3"
                      onClick={this.handleCharacteristics}
                      label="3 - Ok"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="4"
                      onClick={this.handleCharacteristics}
                      label="4 - Comfortable"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="5"
                      onClick={this.handleCharacteristics}
                      label="5 - Perfect"
                      type="checkbox"
                      id={item}
                    />
                  </dl>
                ) : null}
                {item === "Quality" ? (
                  <dl>
                    <Form.Check
                      inline
                      name="1"
                      onClick={this.handleCharacteristics}
                      label="1 - Poor"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="2"
                      onClick={this.handleCharacteristics}
                      label="2 - Below average"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="3"
                      onClick={this.handleCharacteristics}
                      label="3 - What I expected"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="4"
                      onClick={this.handleCharacteristics}
                      label="4 - Pretty great"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="5"
                      onClick={this.handleCharacteristics}
                      label="5 - Perfect"
                      type="checkbox"
                      id={item}
                    />
                  </dl>
                ) : null}
                {item === "Size" ? (
                  <dl>
                    <Form.Check
                      inline
                      name="1"
                      onClick={this.handleCharacteristics}
                      label="1 - A size too small"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="2"
                      onClick={this.handleCharacteristics}
                      label="2 - half a size too small"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="3"
                      onClick={this.handleCharacteristics}
                      label="3 - Perfect"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="4"
                      onClick={this.handleCharacteristics}
                      label="4 - half a size too big"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="5"
                      onClick={this.handleCharacteristics}
                      label="5 - A size too wide"
                      type="checkbox"
                      id={item}
                    />
                  </dl>
                ) : null}
                {item === "Width" ? (
                  <dl>
                    <Form.Check
                      inline
                      name="1"
                      onClick={this.handleCharacteristics}
                      label="1 - Too narrow"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="2"
                      onClick={this.handleCharacteristics}
                      label="2 - Slightly narrow"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="3"
                      onClick={this.handleCharacteristics}
                      label="3 - Perfect"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="4"
                      onClick={this.handleCharacteristics}
                      label="4 - Slightly wide"
                      type="checkbox"
                      id={item}
                    />
                    <Form.Check
                      inline
                      name="5"
                      onClick={this.handleCharacteristics}
                      label="5 - Too wide"
                      type="checkbox"
                      id={item}
                    />
                  </dl>
                ) : null}
              </div>
            ))}
            <Form.Label>
              <b>Review Summary:</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="summary"
              maxLength="60"
              onChange={this.handleInput}
              placeholder="Example: Best purchase ever!"
            />
            <Form.Label>
              <b>Review Body:</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="body"
              minLength="50"
              maxLength="1000"
              onChange={this.handleInput}
              placeholder="Why did you like the product or not?"
            />
            <Form.Label>
              <b>Photos:</b>
            </Form.Label>
            <Form.Control placeholder="Upload them if you can mwha ha ha ha!" />
            <Form.Label>
              <b>Nickname:</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="nickname"
              maxLength="60"
              onChange={this.handleInput}
              placeholder="Example: jackson11!"
            />
            <p>
              <i>
                For privacy reasons, do not use your full name or email address
              </i>
            </p>
            <Form.Label>
              <b>Email:</b>
            </Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              maxLength="60"
              onChange={this.handleInput}
              placeholder="Example: jackson11@email.com"
            />
          </dl>
        </Form>
        <ModalBody />
        <ModalFooter>
          <Button disabled={!isEnabled} onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button onClick={this.props.ShowModal}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
