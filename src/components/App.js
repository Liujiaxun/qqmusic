import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route,HashRouter,Switch,NavLink } from 'react-router-dom'
import Muscihall from './musichall/MusicHall'
import My from './my/my'
import News from './news/news'
import rootReducer  from '../redux/reducer';
import '../assets/styl/app.styl'
const menuSVG = require('../assets/img/menu.svg');
const searchSVG = require('../assets/img/search.svg');
const store = createStore(rootReducer);

class App extends Component {
  isActive = (e,s,t) => {
    if(s.pathname.indexOf(t)!== -1){
      return true
    }
    return false;

  }
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
        <div className="App">
          <header className="app-header">
          <div className="app-one">
            <div className='menu-button'>
              <div className='label-checkbox'>
                <label htmlFor="--">
                    <img src={menuSVG} alt="..." />
                </label>
              </div>
            </div>
            <div className="menu-one-list">
              <div>
                <NavLink exact activeClassName="activeClassNameOne"isActive={(e,s)=>this.isActive(e,s,'/my')} to="/my">我的</NavLink>
              </div>
              <div>
                <NavLink exact activeClassName="activeClassNameOne" isActive={(e,s)=>this.isActive(e,s,'/musichall')} to="/musichall">音乐馆</NavLink>
              </div>
              <div>
                <NavLink exact activeClassName="activeClassNameOne" isActive={(e,s)=>this.isActive(e,s,'/news')} to="/news">发现</NavLink>
              </div>
            </div>
            <div className='menu-search'>
              <div className='label-checkbox'>
                  <img src={searchSVG} alt="..." />
              </div>
            </div>
          </div>
          </header>
          <div className="Main">
              <section>
                <Switch>
                  <Route path="/musichall" component={Muscihall}>
                  </Route>
                  <Route path="/my" component={My}></Route>
                  <Route path="/news" component={News}></Route>
                </Switch>
              </section>
          </div>
        </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
