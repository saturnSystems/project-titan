// this component will go in Q-a.jsx
import React from 'react';
const dataFunctions = require('/Users/austin/Documents/HackReactor/project-titan/src/helper/helper.js');
// getListQuestions


class RenderList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const items = this.props.questions.map(question => <div>{ question.question_body }</div>)
        return (
          <div>{ items }</div>
        )
    }
}

export default RenderList;