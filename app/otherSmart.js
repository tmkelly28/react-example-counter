'use strict';

import React, { Component } from 'react';
import Smart from './smart';
import Dumb from './dumb';

export default class OtherSmart extends Smart {

  constructor (props) {
    super(props);
    this.state = {
      counter: 2
    };
  }

  increment () {
    this.setState(({ counter }) => {
      return {
        counter: counter * counter
      };
    });
  }

  render () {
    return (
      <Dumb counter={this.state.counter} increment={() => this.increment()} />
    )
  }
}