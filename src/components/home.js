import React, { Component } from 'react';
import Navbar from './navbar';
import SearchPopup from './search_popup';
import Store from '../stores/store';
import { observer } from 'mobx-react';
import Details from './details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

    componentDidMount() {
        document.querySelector(".home-part").style.height = `${window.innerHeight}px`
    }

    render() {
        const {
            movies,
            errorMessage,
            showPopup,
            index,
            nextPrevChange,
            page,
            changePage,
            formSubmited
        } = Store;

        return (
            <div>
                {page === "home" ? <div id="home-page">
                    {errorMessage && <div className="alert alert-danger" role="alert">
                        {errorMessage.message}
                    </div>}
                    <Navbar store={Store} />
                    <div className="home-part">
                        {!!movies.length && <div className="movies-part">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1>Result <span className="badge badge-dark">{movies.length}</span> / <span className="badge badge-dark">{index + 1}</span></h1>
                                    <h5><b>Title: </b>{movies[index].Title}</h5><hr />
                                    <p><b>Year: </b>{movies[index].Year}</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src={movies[index].Poster !== "N/A" ? movies[index].Poster : "/img/noimage.jpg"} alt="Card image cap" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <button
                                            name="details"
                                            type="button"
                                            className="btn btn-warning btn-lg"
                                            onClick={changePage}
                                        >Details {formSubmited && <FontAwesomeIcon className="fa-pulse" icon={faSpinner} />}</button>
                                    </div>
                                    {movies.length > 1 && <div className="col-md-3 offset-md-1">
                                        <button
                                            name="prev"
                                            type="button"
                                            className="btn btn-outline-info"
                                            onClick={nextPrevChange}
                                        >prev</button>
                                        <button
                                            name="next"
                                            type="button"
                                            className="btn btn-outline-info float-right"
                                            onClick={nextPrevChange}
                                        >next</button>
                                    </div>}
                                </div>
                            </div>
                        </div>}
                    </div>
                    {showPopup && <SearchPopup store={Store} />}
                </div>
                    : <Details store={Store} />}
            </div>
        )
    }
}


export default observer(Home);