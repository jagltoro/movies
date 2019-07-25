import React, { Component } from 'react';

import loader from '../assets/img/loader.svg';

class Preloader extends Component {
    render() {
        return (
            <div id="preloader">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <img src={loader} alt="Loader" className="loader-loading"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Preloader;
