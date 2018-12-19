import React, { Component } from 'react'
import { observer } from 'mobx-react';

class Navbar extends Component {
    render() {
        const { showCloseOnClick } = this.props.store;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img alt="logo" src="/img/logo.png" width="150" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a onClick={showCloseOnClick} className="nav-link" href="javascript:void(0)">Search</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default observer(Navbar);