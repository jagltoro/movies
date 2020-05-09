import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadUpcoming} from "../actions/movieActions";

function Upcoming({upcomingMovies, dispatch}) {

  useEffect(() => {
    dispatch(loadUpcoming());
  }, []);

  return (
    <div className="row">
      <div className="col-12 now-playing">
        <div className="row">
          {
            upcomingMovies.map((movies, index) => {
              if(movies.poster_path){
                return <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <Link to={`${process.env.PUBLIC_URL}/details/${movies.id}`} className="title">
                    <div className="movie-card base-card">
                      <div className="wrapper"
                           style={{background: `url(https://image.tmdb.org/t/p/w500${movies.poster_path}) center / cover no-repeat`}}>
                        <div className="data">
                          <div className="content">
                            <p className="release-date">
                              Release Date:
                              <span className="date">
                                {movies.release_date}
                              </span>
                            </p>
                          </div>
                        </div>
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
  let upcomingMovies = [];
  if (state.upcomingMovies.data) {
    upcomingMovies = state.upcomingMovies.data.results;
  }
  return {
    upcomingMovies: upcomingMovies
  };
}

export default connect(mapStateToProps)(Upcoming);
