import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const helper = require('../../helper/helper.js')

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowModal: true,
      Question: '',
      Nickname: '',
      Email: '',
      ErrorMessage: '',
      QuestionError: '',
      NicknameError: '',
      EmailError: '',
    };
  }

  CloseModal = () => {
      this.setState({
          ShowModal: false
      })
  }

  Question = (e) => {
      this.setState({Question: e.target.value});
      console.log(this.state.Question)
  }

  Nickname = (e) => {
    this.setState({Nickname: e.target.value});
  }

  Email = (e) => {
    this.setState({Email: e.target.value});
  }

  // const postAQuestion = (productId, body, name, email, callback)
// This function successfully sends data to the server, but the question is not retrieved on page refresh. 
// After extensive troubleshooting, I believe this to be an issue on the server side.
  CheckForErrors = () => {

    let errors = false;

    if (!this.state.Question) {
      errors = true;
      this.setState({QuestionError: 'Invalid question', ErrorMessage: `You must enter the following:`})
    } else {
      this.setState({QuestionError: ''})
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
      this.setState({Email: ''})
    }

    if (!errors) {
      helper.postAQuestion(this.props.currentProduct.id, this.state.Question, this.state.Nickname, this.state.Email, () => true);
      this.setState({ShowModal: false})
    }

  }

  render() {
    console.log(this.props.currentProduct.id) // remove this when add question is pulled in on page reload
    return (
      <Modal size="lg" show={this.state.ShowModal}>
          <ModalHeader><h2>Ask Your Question</h2><ModalTitle>About the {this.props.currentProduct.name}</ModalTitle></ModalHeader>
            <Form>
            <p style={{color: 'red'}}><i>{this.state.ErrorMessage}</i></p>
            <Form.Label><b>Your Question*</b></Form.Label>
              <Form.Control maxlength={"1000"} placeholder={`1000 characters`} onChange={this.Question} size="sm" style={{height: "10em"}}></Form.Control>
              <p style={{color: 'red'}}><i>{this.state.QuestionError}</i></p>
            <Form.Label><b>What is your nickname*</b></Form.Label>
              <Form.Control maxlength={"60"} placeholder={"Example: jackson11!"} onChange={this.Nickname}></Form.Control>
              <p style={{color: 'red'}}><i>{this.state.NicknameError}</i></p>
              <p><i>For privacy reasons, do not use your full name or email address</i></p>
            <Form.Label><b>Your email*</b></Form.Label>
              <Form.Control maxlength={"60"} type={`email`} placeholder={`Why did you like the product or not?`} onChange={this.Email}></Form.Control>
              <p style={{color: 'red'}}><i>{this.state.EmailError}</i></p>
              <p><i>For authentication reasons, you will not be emailed</i></p>
            </Form>
            <ModalBody></ModalBody>
          <ModalFooter><Button onClick={this.CheckForErrors}>Submit</Button><Button onClick={this.CloseModal}>Close</Button></ModalFooter>
      </Modal>
    );
  }
}

export default AddQuestion;