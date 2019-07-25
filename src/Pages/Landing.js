import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Search from '../components/Search';
import NowPlaying from '../Pages/NowPlaying';

class Landing extends Component {

    constructor(props, context) {
        super(props, context);
        document.body.style.backgroundImage = '';
    }

    render() {
        return (
            <div className="container-fluid background-landing">
                <Navbar/>
                <div className="container">
                    <Search/>
                    <NowPlaying/>
                </div>
            </div>
        );
    }
}

export default Landing;
