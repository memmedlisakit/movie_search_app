import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react';



class SearchPopup extends Component {

    componentDidMount() {
        document.querySelector(".form-container").style.top = `${window.innerHeight / 2}px`
    }

    render() {
        const {
            showCloseOnClick,
            serachText,
            searchOnChnage,
            formSubmited,
            formSubmit,
            responseError
        } = this.props.store;

        return (
            <div className="search-popup">
                <form onSubmit={formSubmit} className="form-container">
                    <input
                        placeholder="Search movie..."
                        type="text"
                        value={serachText}
                        onChange={searchOnChnage}
                        id="search-input"
                    />
                    <FontAwesomeIcon
                        className={`search-icon ${formSubmited ? "fa-pulse" : ""}`}
                        icon={formSubmited ? faSpinner : faSearch}
                        onClick={formSubmit}
                    />
                    {responseError && <div className="alert alert-warning" role="alert">
                        <strong>{responseError}</strong>
                    </div>}
                </form>
                <FontAwesomeIcon
                    onClick={showCloseOnClick}
                    className="popup-close"
                    icon={faTimes} />
            </div>
        )
    }
}
export default observer(SearchPopup);
