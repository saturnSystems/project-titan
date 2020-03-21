import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const helper = require('../../helper/helper.js')



class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowModal: true,
      Answer: '',
      Nickname: '',
      Email: '',
    };
  }

  CloseModal = () => {
      this.setState({
          ShowModal: false
      })
  }

  Answer = (e) => {
      this.setState({Answer: e.target.value});
      console.log(this.state.Answer)
  }

  Nickname = (e) => {
    this.setState({Nickname: e.target.value});
    console.log(this.state.Nickname)
  }

  Email = (e) => {
    this.setState({Email: e.target.value});
    console.log(this.state.Email)
  }

// const postAnAnswer = (questionId, body, name, email, photos, callback)
// added question id in props
  PostAnswer = () => {
    helper.postAnAnswer(this.props.id, this.state.Answer, this.state.Nickname, this.state.Email, null, () => true);
    this.setState({ShowModal: false})
  }

  render() {
    return (
      <Modal size="lg" show={this.state.ShowModal}>
          <ModalHeader><h2>Submit your Answer</h2></ModalHeader>
          <ModalTitle></ModalTitle>
          <Form>
          <Form.Label><b>Your Answer*</b></Form.Label>
          <Form.Control placeholder={`1000 characters`} onChange={this.Answer}></Form.Control>
          <Form.Label><b>What is your nickname*</b></Form.Label>
          <Form.Control placeholder={"Example: jack543!"} onChange={this.Nickname}></Form.Control>
          <p><i>For privacy reasons, do not use your full name or email address</i></p>
          <Form.Label><b>Your email*</b></Form.Label>
          <Form.Control type={`email`} placeholder={`Example: jack@email.com`} onChange={this.Email}></Form.Control>
          </Form>
          <ModalBody></ModalBody>
          <ModalFooter><Button onClick={this.PostAnswer}>Submit</Button><Button onClick={this.CloseModal}>Close</Button></ModalFooter>
      </Modal>
    );
  }
}

export default AddAnswer;