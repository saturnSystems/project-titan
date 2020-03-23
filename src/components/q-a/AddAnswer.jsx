import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const helper = require('../../helper/helper.js');


class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowModal: true,
      Answer: '',
      Nickname: '',
      Email: '',
      ErrorMessage: '',
      AnswerError: '',
      NicknameError: '',
      EmailError: '',
    };
  }

  CloseModal = () => {
      this.setState({
          ShowModal: false
      })
  }

  Answer = (e) => {
      this.setState({Answer: e.target.value});
  }

  Nickname = (e) => {
    this.setState({Nickname: e.target.value});
  }

  Email = (e) => {
    this.setState({Email: e.target.value});
  }

  CheckForErrors = () => {
    let errors = false;

    if (!this.state.Answer || this.state.Answer.length > 1000) {
      errors = true;
      this.setState({AnswerError: 'Invalid Answer', ErrorMessage: `You must enter the following:`})
    } else {
      this.setState({AnswerError: ''})
    }

    if (!this.state.Nickname) {
      errors = true;
      this.setState({NicknameError: 'Invalid Nickname', ErrorMessage: `You must enter the following:`})
    } else {
      this.setState({NicknameError: ''})
    }

    if (!this.state.Email || !this.state.Email.includes('@')) {
      errors = true;
      this.setState({EmailError: 'Invalid Email', ErrorMessage: `You must enter the following:`})
    } else {
      this.setState({EmailError: ''})
    }

    if (!errors) {
      helper.postAnAnswer(this.props.id, this.state.Answer, this.state.Nickname, this.state.Email, null, () => true);
      this.setState({ShowModal: false})
    }
  }

  render() {
    return (
      <Modal size="lg" show={this.state.ShowModal}>
          <ModalHeader><h2>Submit your Answer</h2></ModalHeader>
          <ModalTitle>{this.props.currentProduct.name}: {this.props.questionBody}</ModalTitle>
          <Form>
          <p style={{color: 'red'}}><i>{this.state.ErrorMessage}</i></p>
          <Form.Label><b>Your Answer*</b></Form.Label>
          <Form.Control placeholder={`1000 characters`} onChange={this.Answer}></Form.Control>
          <p style={{color: 'red'}}><i>{this.state.AnswerError}</i></p>
          <Form.Label><b>What is your nickname*</b></Form.Label>
          <Form.Control placeholder={"Example: jack543!"} onChange={this.Nickname}></Form.Control>
          <p style={{color: 'red'}}><i>{this.state.NicknameError}</i></p>
          <p><i>For privacy reasons, do not use your full name or email address</i></p>
          <Form.Label><b>Your email*</b></Form.Label>
          <Form.Control type={`email`} placeholder={`Example: jack@email.com`} onChange={this.Email}></Form.Control>
          <p style={{color: 'red'}}><i>{this.state.EmailError}</i></p>
          </Form>
          <ModalBody></ModalBody>
          <ModalFooter><Button onClick={this.CheckForErrors}>Submit</Button><Button onClick={this.CloseModal}>Close</Button></ModalFooter>
      </Modal>
    );
  }
}

export default AddAnswer;