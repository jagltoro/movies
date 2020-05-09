import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

import logo from '../assets/img/logo.svg'

function Navbar({history}) {

  const [route, setRoute] = useState('');

  useEffect(() => {
    let completeRoute = history.location.pathname;
    completeRoute = completeRoute.split('/');
    setRoute(completeRoute[completeRoute.length - 1]);
  }, [history.location.pathname]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={process.env.PUBLIC_URL + '/'}>
          <img src={logo} alt="The Movies App"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className={(route === '' || route === 'movies') ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={route === 'upcoming' ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to={process.env.PUBLIC_URL + '/upcoming'}>Upcoming</Link>
            </li>
            <li className={route === 'search' ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to={process.env.PUBLIC_URL + '/search'}>Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
