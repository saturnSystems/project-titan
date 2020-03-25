import React from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

class AnswerImages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  ShowModal = () => {
      this.setState({showModal: !this.state.showModal})
    console.log('Hello!!!!!')
  }

  render() {
    return (
        <div>
      {this.state.showModal ? 
      <Modal><ModalBody><h1 onClick={this.ShowModal}>Yes, yes yes</h1></ModalBody></Modal>
      : <div><Image src={this.props.photo} thumbnail style={{width: "25%", height: "auto"}} onClick={this.ShowModal}/></div>}
      </div>
    );
  }
}

export default AnswerImages;