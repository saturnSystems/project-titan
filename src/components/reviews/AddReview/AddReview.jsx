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
      input: "",
      ShowModal: true
    };
  }

  CloseModal = () => {
    this.setState({
      ShowModal: false
    });
  };

  render() {
    return (
      <Modal size="lg" show={this.state.ShowModal}>
        <ModalHeader>
          <h2>Write Your Review</h2>
          <h3>About the {this.props.productName}</h3>
        </ModalHeader>
        <ModalTitle />
        <Form>
          <Form.Label>
            <b>Overall Rating:</b>

            {["checkbox"].map(type => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1 Star - Poor"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="2 Star - Fair"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="3 Star - Average"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="4 Star - Good"
                  type={type}
                  id={`inline-${type}-4`}
                />
                <Form.Check
                  inline
                  label="5 Star - Great"
                  type={type}
                  id={`inline-${type}-5`}
                />
              </div>
            ))}

            <b>Do You Recommend This Product?:</b>
            {["checkbox"].map(type => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
            <b>Characteristics:</b>
          </Form.Label>
          <Form.Control placeholder="Size, Comfort, ..." />
          <Form.Label>
            <b>Review Summary:</b>
          </Form.Label>
          <Form.Control placeholder="Title of your Review" />
          <Form.Label>
            <b>Review Body:</b>
          </Form.Label>
          <Form.Control placeholder="Tell your Review" />
          <Form.Label>
            <b>Photos:</b>
          </Form.Label>
          <Form.Control placeholder="Upload them if you can" />
          <Form.Label>
            <b>Nickname:</b>
          </Form.Label>
          <Form.Control placeholder="Give us a name" />
          <p>
            <i>
              For privacy reasons, do not use your full name or email address
            </i>
          </p>
          <Form.Label>
            <b>Email:</b>
          </Form.Label>
          <Form.Control type="email" placeholder="Example: jack@email.com" />
        </Form>
        <ModalBody />
        <ModalFooter>
          <Button>Submit</Button>
          <Button onClick={this.props.ShowModal}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
