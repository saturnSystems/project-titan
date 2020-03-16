// this component will go in Q-a.jsx
import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Questions from '../q-a/Questions';


const List = (props) => (
  <div>
    <Questions questions={props.questions} />
  </div>
);


export default List;
