import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer  from '../redux/reducer';
import '../assets/styl/app.styl'
const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="app-header">
          <div className="app-one">
            <div className='menu-button'>
              menu
            </div>
            <div className="menu-one-list">
              <div>我的</div>
              <div>音乐馆</div>
              <div>发现</div>
            </div>
            <div className='menu-search'>
              search
            </div>
          </div>
              
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
