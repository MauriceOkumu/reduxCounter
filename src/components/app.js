import React, { Component } from 'react';
import EnglishCounter from '../../containers/EnglishCounter';
import SpanishCounter from '../../containers/SpanishCounter';


export default class App extends Component {
  render() {
    return (
      <div>
        <EnglishCounter />
        <SpanishCounter />
      </div>
    );
  }
}
