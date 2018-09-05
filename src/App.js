import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Header from './common/header/index'

class App extends Component {
  
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header/>
        </Provider>
        
      </div>
    );
  }
}

export default App;
