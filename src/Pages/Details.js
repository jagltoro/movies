import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';

import {loadMovieDetails} from '../actions/movieActions';
// import {searchMovies} from '../actions/searchActions';
// import {loadSimilar} from '../actions/similarActions';
// import powered from '../../public/images/poweredby.svg';


let createHandlers = function(dispatch) {
    return {
        click: function(node) {
            dispatch(loadMovieDetails(node));
            // dispatch(loadSimilar(node));
        },
        // search: function (node) {
        //     dispatch(searchMovies(node))
        // }
    };
};

class Details extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            loaded: 0
        };

        this.handlers = createHandlers(this.props.dispatch);
        document.body.style.backgroundImage = '';
    }
    componentDidMount(){
        this.handlers.click(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.movieDetails.id !== nextProps.movieDetails.id){
            let image = document.createElement('img');
            let self = this;

            document.body.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + nextProps.movieDetails.backdrop_path + ')';

            image.src = 'https://image.tmdb.org/t/p/original' + nextProps.movieDetails.backdrop_path;
            image.onload = function () {
                self.setState({
                    loaded: 1
                });
            };
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar/>
                <div className="row justify-content-center">
                    {   this.state.loaded === 0 &&
                            <Preloader/>
                    }
                    <div className="col-md-8 col-md-push-4 col-xs-12">
                        <div className="movie-details">
                            <div className="movie-panel panel-default">
                                <div className="movie-panel-body">
                                    {
                                        this.props.movieDetails.title &&
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={`https://image.tmdb.org/t/p/w500${this.props.movieDetails.poster_path}`} alt="Poster" className="img-fluid"/>
                                            </div>
                                            <div className="col-8">
                                                <h1>
                                                    {this.props.movieDetails.title} <br/>
                                                    {
                                                        this.props.movieDetails.title !== this.props.movieDetails.original_title &&
                                                        <small>{this.props.movieDetails.original_title}</small>
                                                    }
                                                </h1>
                                                <small>
                                                    {this.props.movieDetails.tagline}
                                                </small>

                                                <small className="movie-details-release">{this.props.movieDetails.release_date}</small>
                                                <small className="movie-details-rating">{this.props.movieDetails.vote_average} / 10</small>

                                                <p className="movie-details-description">
                                                    {this.props.movieDetails.overview}
                                                </p>
                                                <h5>Genres</h5>
                                                {
                                                    this.props.movieDetails.genres.map((genre) =>{
                                                        return <span className="badge badge-light">{genre.name}</span>
                                                    })
                                                }
                                                <br/>
                                                <br/>
                                                <h5>Studios</h5>
                                                {
                                                    this.props.movieDetails.production_companies.map((company) =>{
                                                        return <span className="badge badge-light">
                                                                {company.logo_path &&
                                                                <img
                                                                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                                                                    alt="Company" className="company-logo"/>
                                                                }
                                                            {company.name}
                                                            </span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    let movieDetails = [];
    if (state.movieDetails.data) {
        movieDetails = state.movieDetails.data;
    }
    return {
        movieDetails: movieDetails
    };
}

export default connect(mapStateToProps)(Details);
// export default Details;
