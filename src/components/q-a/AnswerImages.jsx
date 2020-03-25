import React from 'react';
import Image from 'react-bootstrap/Image';

class AnswerImages extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return (
          <div><Image src={this.props.url}/></div>
      )
  }
}

export default AnswerImages;