import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      names: ["Dorian", "Eric", "Evan", "Eran"]
    };
    // if using state in a function, bind the function using 'this' in the constructor
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ value: !this.state.value });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Switch</button>
        <p>The value is: {this.state.value ? "True" : "False"}</p>
        <p>Names using map</p>
        {this.state.names.map(names => <li>{names}</li>)}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
