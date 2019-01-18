import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';

class NowPlaying extends Component {

    componentDidMount(){
        document.body.style.backgroundImage = ''
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar/>
                <div className="row">
                    <div className="col-12 now-playing">
                        <div className="row">
                            {
                                this.props.nowPlaying.map((movies) => {
                                    return  <div className="col-3">
                                        <div className="movie-card base-card">
                                            <div className="wrapper" style={{ background: `url(https://image.tmdb.org/t/p/w500${movies.poster_path}) center / cover no-repeat` }}>
                                                <div className="data">
                                                    <div className="content">
                                                        <p className="text">{movies.overview}</p>
                                                        <Link to={`/details/${movies.id}`} className="button">Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let nowPlaying = [];
    if (state.nowPlaying.data) {
        nowPlaying = state.nowPlaying.data.results;
    }
    return {
        nowPlaying: nowPlaying
    };
}

export default connect(mapStateToProps)(NowPlaying);
