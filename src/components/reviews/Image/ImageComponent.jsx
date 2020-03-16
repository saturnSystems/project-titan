/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import "./ImageComponent.css";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleShowImage = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    // console.log(this.props.review);
    // console.log(this.props.photos);
    const { isOpen } = this.state;
    return (
      <div>
        <img
          className="small"
          src="https://cdn.filestackcontent.com/pnqFRG2AQu2I8ChN1jpp"
          onClick={this.handleShowImage}
          alt="review"
        />
        {isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowImage}
          >
            <img
              className="image"
              src="https://cdn.filestackcontent.com/pnqFRG2AQu2I8ChN1jpp"
              onClick={this.handleShowImage}
              alt="review"
            />
          </dialog>
        )}
      </div>
    );
  }
}
