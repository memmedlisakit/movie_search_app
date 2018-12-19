import React from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Store {
    showPopup = false;
    formSubmited = false;
    errorMessage = null;
    responseError = null;
    serachText = "";
    page = "home";
    index = 0;
    selectedMovie = {};
    movies = [];


    showCloseOnClick = e => {
        this.showPopup = !this.showPopup;
        this.serachText = "";
        if (this.showPopup) {
            setTimeout(() => {
                document.querySelector("#search-input").focus();
            }, 0);
        }
    }

    searchOnChnage = e => {
        this.serachText = e.target.value;
    }

    formSubmit = async e => {
        e.preventDefault();
        this.formSubmited = true;
        await fetch(`http://www.omdbapi.com/?s=${this.serachText}&apikey=888ef725`)
            .then(res => res.json())
            .then(data => {
                this.formSubmited = false;
                if (data.Response === "False") {
                    this.responseError = data.Error;
                } else {
                    this.index = 0;
                    this.responseError = null;
                    this.showPopup = false;
                    this.movies = data.Search;
                }
            })
            .catch(err => {
                this.formSubmited = false;
                this.showPopup = false;
                this.errorMessage = err;
            })

        setTimeout(() => {
            this.responseError = null;
            this.errorMessage = null;
        }, 3000);
    }

    nextPrevChange = e => {
        if (e.target.name === "next") {
            this.index = this.index < (this.movies.length - 1) ? this.index + 1 : 0;
        } else {
            this.index = this.index > 0 ? this.index - 1 : this.movies.length - 1;
        }
    }

    changePage = async e => {
        this.formSubmited = true;
        await fetch(`http://www.omdbapi.com/?i=${this.movies[this.index].imdbID}&apikey=888ef725`)
            .then(res => res.json())
            .then(data => {
                this.formSubmited = false;
                this.selectedMovie = data;
                this.page = "details";
            })
            .catch(err => {
                this.formSubmited = false;
                this.showPopup = false;
                this.errorMessage = err;
            })
    }
}



decorate(Store, {
    showPopup: observable,
    serachText: observable,
    formSubmited: observable,
    movies: observable,
    responseError: observable,
    errorMessage: observable,
    index: observable,
    page: observable,
    selectedMovie: observable,
    showCloseOnClick: action,
    searchOnChnage: action,
    formSubmit: action,
    nextPrevChange: action,
    changePage: action
});
export default observer(new Store());