import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NowPlaying extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12 now-playing">
                    <div className="row">
                        {
                            this.props.nowPlaying.map((movies,index) => {
                                return  <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className="movie-card base-card">
                                        <div className="wrapper" style={{ background: `url(https://image.tmdb.org/t/p/w500${movies.poster_path}) center / cover no-repeat` }}>
                                            <div className="data">
                                                <div className="content">
                                                    <Link to={`${process.env.PUBLIC_URL}/details/${movies.id}`} className="title">
                                                        {movies.title}
                                                    </Link>
                                                    <p className="vote">
                                                        <i className="fas fa-star"/>
                                                        <span className="average">{movies.vote_average}</span> / 10
                                                    </p>
                                                    {/*<Link to={`/details/${movies.id}`} className="button">Read more</Link>*/}
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
