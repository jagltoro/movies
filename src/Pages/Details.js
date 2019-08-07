import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';

import Crew from '../components/MovieDetails/Crew';
import Overview from '../components/MovieDetails/Overview';
import Similar from '../components/MovieDetails/Similar';

import {loadMovieDetails, loadSimilar, movieCast} from '../actions/movieActions';
// import {searchMovies} from '../actions/searchActions';
// import powered from '../../public/images/poweredby.svg';


let createHandlers = function(dispatch) {
    return {
        click: function(node) {
            dispatch(loadMovieDetails(node));
            dispatch(movieCast(node));
            dispatch(loadSimilar(node));
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
            newState: true,
            loaded: 0,
            showOverview: true,
            showCast: false,
            showSimilar: false
        };

        this.handlers = createHandlers(this.props.dispatch);
        this.backgroundHolder = React.createRef();
        this.refreshAndWaitForLoading = this.refreshAndWaitForLoading.bind(this)

        document.body.style.backgroundImage = '';
    }
    componentDidMount(){
        this.handlers.click(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
        let self = this;
        if(this.state.newState && nextProps.movieDetails.backdrop_path){
            this.refreshAndWaitForLoading(nextProps);
        }else{
            this.backgroundHolder.current.style.backgroundImage = '';
            self.setState({
                loaded: 1,
                newState: false,
                showOverview: true,
                showCast: false,
                showSimilar: false
            });
        }

        if(this.props.match.params.id !== nextProps.match.params.id){
            setTimeout(() =>{
                self.handlers.click(self.props.match.params.id);
                self.setState({
                    loaded: 0
                });
            },200);
            setTimeout(() =>{
                self.refreshAndWaitForLoading(this.props);
            },1000);
        }
    }

    refreshAndWaitForLoading(data){
        console.log(data.movieDetails.backdrop_path);
        let image = document.createElement('img');
        let self = this;

        this.backgroundHolder.current.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path + ')';
        image.src = 'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path;
        image.onload = function () {
            self.setState({
                loaded: 1,
                newState: false,
                showOverview: true,
                showCast: false,
                showSimilar: false
            });
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <Navbar/>
                <div className="row">
                    <div className="col-12 movie-background" ref={this.backgroundHolder}/>
                </div>
                <div className="container">

                    <div className="row justify-content-center">
                        {   this.state.loaded === 0 &&
                                <Preloader/>
                        }
                    </div>
                    {
                        this.props.movieDetails.title &&
                        <div>
                            <div className="row movie-details">
                                <div className="col-12 col-lg-4 movie-poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${this.props.movieDetails.poster_path}`}
                                         alt="Poster" className="img-fluid"/>
                                </div>
                                <div className="col-12 col-lg-8 offset-lg-4 movie-main-data">
                                    <h1 className="title">
                                        {this.props.movieDetails.title}
                                        <small className="year">{this.props.movieDetails.release_date.split('-')[0]}</small>
                                    </h1>
                                    <div className="vote">
                                        <hr/>
                                        <div className="col-2 rank">
                                            <i className="fas fa-star"/>
                                            <span className="average">{this.props.movieDetails.vote_average}</span> / 10
                                            <br/>
                                            <span className="vote-count">
                                                {this.props.movieDetails.vote_count} Votes
                                            </span>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 offset-lg-4 movie-additional-data">
                                    <ul className="nav nav-tabs justify-content-around">
                                        <li className="nav-item">
                                            <span className={this.state.showOverview ? "nav-link active" : "nav-link" } onClick={() => this.setState({
                                                showOverview: true,
                                                showCast: false,
                                                showSimilar: false
                                            })}>
                                                Overview</span>
                                        </li>
                                        <li className="nav-item">
                                            <span className={this.state.showCast ? "nav-link active" : "nav-link" } onClick={() => this.setState({
                                                showOverview: false,
                                                showCast: true,
                                                showSimilar: false
                                            })}>
                                                Cast & Crew
                                            </span>
                                        </li>
                                        <li className="nav-item">
                                            <span className={this.state.showSimilar ? "nav-link active" : "nav-link" } onClick={() => this.setState({
                                                showOverview: false,
                                                showCast: false,
                                                showSimilar: true
                                            })}>
                                                Similar Movies</span>
                                        </li>
                                    </ul>
                                    {
                                        this.state.showOverview &&
                                        <Overview details={this.props.movieDetails} cast={this.props.movieCast}/>
                                    }
                                    {
                                        this.state.showCast &&
                                        <Crew data={this.props.movieCast}/>
                                    }
                                    {
                                        this.state.showSimilar &&
                                        <Similar data={this.props.similarMovies} movieTitle={this.props.movieDetails.title}/>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    let movieDetails = [];
    let similarMovies = [];
    let movieCast = [];


    if (state.movieDetails.data) {
        movieDetails = state.movieDetails.data;
    }
    if (state.similarMovies.data) {
        similarMovies = state.similarMovies.data.results;
    }
    if (state.movieCast.data) {
        movieCast = state.movieCast.data;
    }
    return {
        movieDetails: movieDetails,
        similarMovies: similarMovies,
        movieCast: movieCast
    };
}

export default connect(mapStateToProps)(Details);