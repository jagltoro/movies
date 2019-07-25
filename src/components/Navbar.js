import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/img/logo.svg'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to={process.env.PUBLIC_URL + '/'}>
                        <img src={logo} alt="The Movies App"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={process.env.PUBLIC_URL + '/now'}>Now Playing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>Latest</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>Popular</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={process.env.PUBLIC_URL + '/'}>Search</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
