import React, { Component } from 'react';
import store from './store'

class App extends Component {
  componentDidMount() {

  }
  constructor(props) {
    super(props);
    console.log(store.getState())
  }
  render() {
    return (
      <div>
       hello react project
      </div>
    );
  }
}

export default App;
