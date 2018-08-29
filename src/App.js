import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    console.log(axios)
    axios.post('  https://easy-mock.com/mock/5a34accca68e2224f9e92bfb/api/todolist').then((res) => {
      console.log(res)
    })
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
