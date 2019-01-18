import * as types from './actionTypes';

const apiKey = 'e5db45ddf9c35cbdf6dc447371768281';

export function loadNowMoviesSuccess(nowPlaying) {
  return {type: types.LOAD_NOW_MOVIES_SUCCESS, nowPlaying};
}

export function loadMovieDetailsSuccess(movies) {
  return {type: types.LOAD_MOVIE_DETAILS_SUCCESS, movies};
}

export function searchMovieSuccess(search) {
  return {type: types.SEARCH_MOVIE_SUCCESS, search};
}

export function loadNowMovies() {
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?&api_key=${apiKey}`)
            .then(response => {
                response.json().then(data => ({
                        data: data,
                        status: response.status
                    })
                ).then(res => {
                    dispatch(loadNowMoviesSuccess(res));
                });
            }).catch(error => {
                throw(error);
            });
    };
}

export function loadMovieDetails(movie) {
  return function (dispatch) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie}?&api_key=${apiKey}`)
      .then(response => {
        response.json().then(data => ({
            data: data,
            status: response.status
          })
        ).then(res => {
          dispatch(loadMovieDetailsSuccess(res));
        });
      }).catch(error => {
        throw(error);
      });
  };
}

export function searchMovie(text) {
  return function (dispatch) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${apiKey}`)
      .then(response => {
        response.json().then(data => ({
            data: data,
            status: response.status
          })
        ).then(res => {
          dispatch(searchMovieSuccess(res));
        });
      }).catch(error => {
        throw(error);
      });
  };
}
