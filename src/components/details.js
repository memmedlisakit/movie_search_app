import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Details extends Component {
    
    render() {
        const {
            Title,
            Poster,
            Website,
            Writer,
            Year,
            Actors,
            Plot
        } = this.props.store.selectedMovie 

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-outline-dark mb-4 mt-4"
                            onClick={e => this.props.store.page = "home"}
                        ><FontAwesomeIcon icon={faArrowAltCircleLeft} /> back</button>
                    </div>
                    <div className="col-md-7">
                        <h2><b>Title : </b> {Title}</h2>
                        <hr />
                        <h3><b>Year : </b> {Year} {!!Website && Website !== "N/A" && <a class="btn btn-light float-right" target="_blank" href={Website} role="button">Website</a>}</h3>
                        <hr />
                        <h3><b>Actors : </b> {Actors}</h3>
                        <hr />
                        <h3><b>Writer : </b> {Writer}</h3>
                        <hr />
                        <h3><b>Description : </b> {Plot}</h3>
                    </div>
                    <div className="col-md-5">
                        <div style={{ backgroundImage: `url(${Poster !== "N/A" ? Poster : "/img/noimage.jpg"})` }} className="main-image"></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default observer(Details);