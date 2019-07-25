import React, { Component } from 'react';
import defaultImg from "../../assets/img/64.png";

class Overview extends Component {

    overviewCrewFunction(crew, job){
        let array = [];
        let tmp = [];
        if(crew){
            tmp = crew.filter(crew => crew.job === job);
            tmp.forEach(crew => array.push(crew.name));
        }

        return array.join(', ');
    }

    overviewGenresFunction(genres){
        let array = [];

        genres.forEach(genre => {
            array.push(genre.name)
        });

        return array.join(', ');
    }


    render() {
        return (
            <div className="overview">
                {
                    this.props.details && this.props.cast &&
                        <div className="row">
                            <div className="col-8">
                                {this.props.details.overview}

                                <div className="cast">
                                    <h5>
                                        Cast
                                        <small>See all</small>
                                    </h5>
                                    {
                                        this.props.cast.cast &&
                                        this.props.cast.cast.slice(0, 5).map((cast,index)=>{
                                            return <div className="cast-item d-flex justify-content-between" key={index}>
                                                <div>
                                                    {   cast.profile_path === null &&
                                                        <img className="img" src={defaultImg}  alt={cast.name}/>
                                                    }
                                                    {
                                                        cast.profile_path !== null &&
                                                        <object className="img" data={'https://image.tmdb.org/t/p/w64_and_h64_face/'+cast.profile_path} type="image/png" >
                                                            <img className="img" src={defaultImg}  alt={cast.name}/>
                                                        </object>
                                                    }
                                                    {cast.name}
                                                </div>
                                                <div>
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
                                    this.overviewCrewFunction(this.props.cast.crew,'Director')
                                }
                                <hr/>
                                <h5>Genres</h5>
                                {
                                    this.overviewGenresFunction(this.props.details.genres)
                                }
                                <hr/>
                                <h5>Release Date</h5>
                                {this.props.details.release_date}
                                <hr/>
                                <h5>Run Time</h5>
                                {this.props.details.runtime} min
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Overview;
