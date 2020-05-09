import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';

import Crew from '../components/MovieDetails/Crew';
import Overview from '../components/MovieDetails/Overview';
import Similar from '../components/MovieDetails/Similar';

import {loadMovieDetails, loadSimilar, movieCast} from '../actions/movieActions';

const createHandlers = function (dispatch) {
  return {
    loadAllData: function (node) {
      dispatch(loadMovieDetails(node));
      dispatch(movieCast(node));
      dispatch(loadSimilar(node));
    }
  };
};

function Details(props) {

  document.body.style.backgroundImage = '';
  const [loaded, setLoaded] = useState(0);
  const [showOverview, setShowOverview] = useState(true);
  const [showCast, setShowCast] = useState(false);
  const [showSimilar, setShowSimilar] = useState(false);
  const backgroundHolder = React.useRef();
  const handlers = createHandlers(props.dispatch);

  useEffect(() => {
    handlers.loadAllData(props.match.params.id);
    refreshAndWaitForLoading(props);
  }, []);

  useEffect(() => {
    setLoaded(0);
    handlers.loadAllData(props.match.params.id);
    refreshAndWaitForLoading(props);
  }, [props.match.params.id]);

  useEffect(() => {
    if(props.movieDetails.backdrop_path){
      refreshAndWaitForLoading(props)
    }
  }, [props.movieDetails.backdrop_path]);

  const refreshAndWaitForLoading = (data) => {
    if(data.movieDetails.backdrop_path){
      let image = document.createElement('img');

      backgroundHolder.current.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path + ')';
      image.src = 'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path;
      image.onload = function () {
        setTimeout(() =>{
          setLoaded(1);
          setShowOverview(true);
          setShowCast(false);
          setShowSimilar(false);
        },1000);
      };
    }else{
      setTimeout(() =>{
        setLoaded(1);
        setShowOverview(true);
        setShowCast(false);
        setShowSimilar(false);
      },1000);
    }
  };

  const cast = () => {
    setShowOverview(false);
    setShowCast(true);
    setShowSimilar(false);
  };
  const overview = () => {
    setShowOverview(true);
    setShowCast(false);
    setShowSimilar(false);
  };

  const similar = () => {
    setShowOverview(false);
    setShowCast(false);
    setShowSimilar(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 movie-background" ref={backgroundHolder}/>
      </div>
      <div className="container">

        <div className="row justify-content-center">
          {loaded === 0 &&
          <Preloader/>
          }
        </div>
        {
          props.movieDetails.title &&
          <div>
            <div className="row movie-details">
              <div className="col-12 col-lg-4 movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${props.movieDetails.poster_path}`}
                     alt="Poster" className="img-fluid"/>
              </div>
              <div className="col-12 col-lg-8 offset-lg-4 movie-main-data row">
                <div className="col-12">
                  <h1 className="title">
                    {props.movieDetails.title}
                    <small className="year">{props.movieDetails.release_date.split('-')[0]}</small>
                  </h1>
                </div>
              </div>
              <div className="col-12 col-lg-8 offset-lg-4 movie-additional-data">
                <ul className="nav nav-tabs justify-content-around">
                  <li className="nav-item">
                    <span className={showOverview ? "nav-link active" : "nav-link"}
                      onClick={overview}>
                        Overview
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className={showCast ? "nav-link active" : "nav-link"}
                      onClick={cast}>
                        Cast & Crew
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className={showSimilar ? "nav-link active" : "nav-link"}
                      onClick={similar}>
                        Similar Movies</span>
                  </li>
                </ul>
                {
                  showOverview &&
                  <Overview details={props.movieDetails} cast={props.movieCast} showCast={cast}/>
                }
                {
                  showCast &&
                  <Crew data={props.movieCast}/>
                }
                {
                  showSimilar &&
                  <Similar data={props.similarMovies} movieTitle={props.movieDetails.title}/>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
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