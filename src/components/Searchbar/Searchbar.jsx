import React, { Component } from 'react';
// import axios from 'axios';

export class Searchbar extends Component {
    state = {
        searchName: '',
    }

    heandelNameChange = e => {
        this.setState({ searchName: e.currentTarget.value.toLowerCase()})
    }


    handelSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchName);
        this.setState({ searchName: ''});
    }

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handelSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        name='searchName'
                        onChange={this.heandelNameChange}
                        value={this.state.searchName}
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}