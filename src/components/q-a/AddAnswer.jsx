import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Form from 'react-bootstrap/Form'



class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowModal: true
    };
  }

  ShowModal = () => {
      this.setState({
          ShowModal: false
      })
  }

  render() {
    return (
      <Modal size="lg" show={this.state.ShowModal}>
          <ModalHeader>Add Answer</ModalHeader>
          <ModalTitle>Put your thoughts in</ModalTitle>
          <Form>
          <Form.Label></Form.Label>
          <Form.Control></Form.Control>
          <Form.Control></Form.Control>
          </Form>
          <ModalBody>Yes, yes, yes! You get a car, as do I!</ModalBody>
          <ModalFooter><button onClick={this.ShowModal}>Close</button></ModalFooter>
      </Modal>
    );
  }
}

export default AddAnswer;