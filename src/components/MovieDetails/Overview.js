import React from 'react';
import defaultImg from "../../assets/img/64.png";

function Overview({details, cast,showCast}) {

  const overviewCrewFunction = (crew, job) => {
    let array = [];
    let tmp = [];
    if (crew) {
      tmp = crew.filter(crew => crew.job === job);
      tmp.forEach(crew => array.push(crew.name));
    }

    return array.join(', ');
  };

  const overviewGenresFunction = (genres) => {
    let array = [];

    genres.forEach(genre => {
      array.push(genre.name)
    });

    return array.join(', ');
  };


  return (
    <div className="overview">
      {
        details && cast &&
        <div className="row">
          <div className="col-8">
            {details.overview}
            <div className="cast">
              <h5>
                Cast
                <small onClick={showCast}>See all</small>
              </h5>
              {
                cast.cast &&
                cast.cast.slice(0, 5).map((cast, index) => {
                  return <div className="cast-item d-flex justify-content-between" key={index}>
                    <div>
                      {cast.profile_path === null &&
                      <img className="img" src={defaultImg} alt={cast.name}/>
                      }
                      {
                        cast.profile_path !== null &&
                        <object className="img"
                                data={'https://image.tmdb.org/t/p/w64_and_h64_face/' + cast.profile_path}
                                type="image/png">
                          <img className="img" src={defaultImg} alt={cast.name}/>
                        </object>
                      }
                      <span className="cast-name">
                          {cast.name}
                        </span>
                    </div>
                    <div className="cast-character">
                      ... {cast.character}
                    </div>
                  </div>
                })
              }
            </div>

          </div>
          <div className="col-4 metadata">
            <h5>Director</h5>
            {
              overviewCrewFunction(cast.crew, 'Director')
            }
            <hr/>
            <h5>Genres</h5>
            {
              overviewGenresFunction(details.genres)
            }
            <hr/>
            <h5>Release Date</h5>
            {details.release_date}
            <hr/>
            <h5>Run Time</h5>
            {details.runtime} min
          </div>
        </div>
      }
    </div>
  );
}

export default Overview;
