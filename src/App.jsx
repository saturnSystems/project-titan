import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Layout";
const helper = require("./helper/helper.js");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: [],
      images: [],
      reviews: [],
      questions: [],
      answers: []
    };
  }

  render() {
    return <Layout />;
  }
}

export default App;
