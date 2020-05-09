import React, {useState} from 'react';
import {connect} from "react-redux";
import {searchMovie} from "../actions/movieActions";
import {Link} from "react-router-dom";

import loader from '../assets/img/loader.svg';

function Search({search, dispatch}) {

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const searchButton = () => {
    if(search !== ''){
      setLoading(true);
      dispatch(searchMovie(text));
      setTimeout(() => {
        setLoading(false);
      },2000);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="row justify-content-center search-container">
          <div className="col-6 ">
            <div className="group">
              <input type="text"
                 required
                 onChange={(e) => setText(e.target.value)}
                 onKeyDown={event => {
                   if (event.key.toLowerCase() === 'enter') { searchButton(); }
                 }}
              />
              <span className="highlight"/>
              <span className="bar"/>
              <label>Search</label>
            </div>
          </div>
          <div className="col-2 find-button">
            <button type="button" className="btn btn-outline-light" onClick={searchButton}>
              <i className="fas fa-search"/>
            </button>
          </div>
        </div>
        <div className="row search-results">
          {
            loading &&
            <img src={loader} alt="Loader" className="loader-loading"/>
          }
          { !loading &&
            search.map((movies, index) => {
              if(movies.poster_path){
                return <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <Link to={`${process.env.PUBLIC_URL}/details/${movies.id}`} className="title">
                    <div className="movie-card base-card">
                      <div className="wrapper"
                           style={{background: `url(https://image.tmdb.org/t/p/w500${movies.poster_path}) center / cover no-repeat`}}>
                        {/*<div className="data">*/}
                        {/*  <div className="content">*/}
                        {/*    <p className="release-date">*/}
                        {/*      Release Date:*/}
                        {/*      <span className="date">*/}
                        {/*      {movies.release_date}*/}
                        {/*    </span>*/}
                        {/*    </p>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </Link>
                </div>
              }
            })
          }
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  let search = [];
  if (state.search.data) {
    search = state.search.data.results;
  }
  return {
    search: search
  };
}

export default connect(mapStateToProps)(Search);
