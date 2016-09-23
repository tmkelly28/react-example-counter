'use strict';

import React, { Component } from 'react';
import Dumb from './dumb';

export default class Smart extends Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: 2
    };
  }

  increment () {
    this.setState(({ counter }) => {
      return {
        counter: ++counter
      };
    });
  }

  render () {
    return (
      <Dumb counter={this.state.counter} increment={() => this.increment()} />
    )
  }
}