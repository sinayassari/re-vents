import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import {Button} from "semantic-ui-react";

const mapState = (state) => ({
   data: state.test.data
});

const action = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter, data} = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='red' content='Decrement' />
      </div>
    )
  }
}

export default connect(mapState, action)(TestComponent);
