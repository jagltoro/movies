import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';

class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar/>
                <div className="row">
                    <div className="col-12 landing">
                        {/*<Preloader/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
