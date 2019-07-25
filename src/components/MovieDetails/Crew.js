import React, { Component } from 'react';

import defaultImg from '../../assets/img/64.png';

class Crew extends Component {

    crewFind(crew, job){
        let array = [];
        let tmp = [];
        if(crew){
            tmp = crew.filter(crew => crew.job === job);
            tmp.forEach(crew => array.push(crew));
        }

        return array;
    }

    render() {
        return (
            <div className="overview">
                <div className="row">
                    <div className="col-12">
                        {
                            this.props.data.crew &&
                            <div className="cast-crew">
                                <div className="crew director">
                                    <h5>Director(s)</h5>
                                    <hr/>
                                    {
                                        this.crewFind(this.props.data.crew, 'Director').map((crew,index) =>
                                            <div className="crew-item" key={index}>
                                                <div>
                                                    <object className="img" data={'https://image.tmdb.org/t/p/w64_and_h64_face/'+crew.profile_path} type="image/png">
                                                        <img className="img" src={defaultImg}  alt={crew.name}/>
                                                    </object>
                                                    <span className="name">
                                                        {crew.name}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="crew actors">
                                    <h5>Actors</h5>
                                    <hr/>
                                    {
                                        this.props.data.cast.map((cast, index) =>
                                            <div className="crew-item d-flex justify-content-between" key={index}>
                                                <div>
                                                    <object className="img" data={'https://image.tmdb.org/t/p/w64_and_h64_face/'+cast.profile_path} type="image/png">
                                                        <img className="img" src={defaultImg}  alt={cast.name}/>
                                                    </object>
                                                    <span className="name">
                                                        {cast.name}
                                                    </span>
                                                </div>
                                                <div>
                                                    ... {cast.character}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="crew producer">
                                    <h5>Producer(s)</h5>
                                    <hr/>
                                    {
                                        this.crewFind(this.props.data.crew, 'Executive Producer').map((crew,index) =>
                                            <div className="crew-item" key={index}>
                                                <div>
                                                    <object className="img" data={'https://image.tmdb.org/t/p/w64_and_h64_face/'+crew.profile_path} type="image/png">
                                                        <img className="img" src={defaultImg}  alt={crew.name}/>
                                                    </object>
                                                    <span className="name">
                                                        {crew.name}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        this.crewFind(this.props.data.crew, 'Producer').map((crew,index) =>
                                            <div className="crew-item" key={index}>
                                                <div>
                                                    <object className="img" data={'https://image.tmdb.org/t/p/w64_and_h64_face/'+crew.profile_path} type="image/png">
                                                        <img className="img" src={defaultImg}  alt={crew.name}/>
                                                    </object>
                                                    <span className="name">
                                                        {crew.name}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Crew;
