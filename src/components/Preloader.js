import React, { Component } from 'react';

class Preloader extends Component {
    render() {
        return (
            <div id="preloader">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object" id="object_four"/>
                        <div className="object" id="object_three"/>
                        <div className="object" id="object_two"/>
                        <div className="object" id="object_one"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Preloader;
