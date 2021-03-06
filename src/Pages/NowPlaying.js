import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function NowPlaying({nowPlaying}) {
  return (
    <div className="row">
      <div className="col-12 now-playing">
        <div className="row">
          {
            nowPlaying.map((movies, index) => {
              if(movies.poster_path){
                return <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <Link to={`${process.env.PUBLIC_URL}/details/${movies.id}`} className="title">
                    <div className="movie-card base-card">
                      <div className="wrapper"
                           style={{background: `url(https://image.tmdb.org/t/p/w500${movies.poster_path}) center / cover no-repeat`}}>
                        <div className="data">
                          <div className="content">
                            <p className="vote">
                              <i className="fas fa-star"/>
                              <span className="average">{movies.vote_average}</span> / 10
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
  let nowPlaying = [];
  if (state.nowPlaying.data) {
    nowPlaying = state.nowPlaying.data.results;
  }
  return {
    nowPlaying: nowPlaying
  };
}

export default connect(mapStateToProps)(NowPlaying);
