import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Provider} from 'react-redux';


import Navbar from "./components/Navbar";
import Landing from './Pages/Landing';
import NowPlaying from './Pages/NowPlaying';
import Details from './Pages/Details';
import Upcoming from './Pages/Upcoming';
import Search from './Pages/Search';

import {loadNowMovies} from './actions/movieActions';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import './assets/css/main.css';

const store = configureStore();
store.dispatch(loadNowMovies());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container-fluid background-landing">
        <Navbar/>
        <Route exact path={process.env.PUBLIC_URL + '/details/:id'} component={Details}/>
        <div className="container">
          <Route exact path={process.env.PUBLIC_URL + '/now'} component={NowPlaying}/>
          <Route exact path={process.env.PUBLIC_URL + '/upcoming'} component={Upcoming}/>
          <Route exact path={process.env.PUBLIC_URL + '/search'} component={Search}/>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing}/>
        </div>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
