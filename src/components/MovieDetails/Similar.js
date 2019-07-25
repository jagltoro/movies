import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Similar extends Component {
    render() {
        return (
            <div className="similar-movies">
                <div className="row">
                    <div className="col-12 title">
                        <h3>
                            <small>Similar movies to: </small>
                            <br/>
                            {this.props.movieTitle}
                        </h3>
                    </div>
                </div>
                    {
                        this.props.data &&
                            this.props.data.slice(0,10).map((movie,index) =>
                                <div className="row similar-movie-container" key={index}>
                                    <div className="col-3 poster-image">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                             alt="Poster" className="img-fluid"/>
                                    </div>
                                    <div className="col-9 similar-movie-details">
                                        <Link to={`/details/${movie.id}`}>
                                            <h5>
                                                {movie.title}
                                                <small className="year">({movie.release_date.split('-')[0]})</small>
                                            </h5>
                                        </Link>
                                        <div className="vote">
                                            <i className="fas fa-star"/>
                                            <span className="average">{movie.vote_average}</span> / 10
                                        </div>
                                        <p>
                                            {movie.overview}
                                        </p>
                                    </div>
                                </div>
                            )
                    }
            </div>
        );
    }
}

export default Similar;
