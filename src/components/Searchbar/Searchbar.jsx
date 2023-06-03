import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Searchbar extends Component {
    state = {
        query: '',
    }

    heandelChange = e => {
        this.setState({ query: e.currentTarget.value.toLowerCase().trim()})
    }


    handelSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        this.props.onSubmit(query);
        this.setState({ query: ''});
    }

    render() {
        const { query } = this.state;
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
                        onChange={this.heandelChange}
                        value={query}
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

