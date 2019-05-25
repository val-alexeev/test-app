import React, { Component } from "react";
import styled from "styled-components";

import { getChatLog } from "./service.js";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      testData: []
    };
  }

  componentWillMount() {
    getChatLog().then(data => {
      return this.setState({
        testData: data
      });
    });
  }

  toggleToggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { toggle } = this.state;
    console.log(this.state.testData);
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            This app is built with <br />
            React ⚛️ + Parcel 📦!
          </h1>
        </header>
        <Button>I am a Button</Button>
      </div>
    );
  }
}

export default App;
