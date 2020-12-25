import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./poem.css";
import axios from 'axios';

class Poem extends Component {
  state = {
    poem: [],
    author: [],
  };

  getRandomPoem = () => {
    axios.get("https://www.poemist.com/api/v1/randompoems").then((result) => {
      this.setState({
        poem: result.data[0],
        author: result.data[0].poet.name
      });
    });
  };

  componentDidMount() {
    this.getRandomPoem();
  }

  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <div className="p-2 title">{this.state.poem.title}</div>
        <div className="p-2 content">{this.state.poem.content}</div>
        <div className="p-2 mb-4 author">{this.state.author}</div>
        <button onClick={this.getRandomPoem}>Next</button>
      </div>
    );
  }
}

export default Poem;
