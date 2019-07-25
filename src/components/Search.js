import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-6 search-container">
                    <form className="form-inline search-form">
                        <div className="input-group col-12">
                            <div className="input-group-prepend">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder="Search" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;
