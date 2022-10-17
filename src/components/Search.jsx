import React, { Component } from 'react';

class Search extends Component {

    state = {
        search: '',
        type: 'all'

    }

    handleKeyDown = (e) => {

        if (e.key === 'Enter') {

            this.props.handleSearch(this.state.search, this.state.type);
        }
    }

    handleFilter = (e) => {

        this.setState(() => ({ type: e.target.dataset.type }), () => this.props.handleSearch(this.state.search, this.state.type))
        

    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder='Search by movie title'
                            type='search'
                            id="email_inline"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button
                            className="btn search-btn"
                            onClick={() => this.props.handleSearch(this.state.search, this.state.type)}
                        >Search</button>
                    </div>
                    <div>
                        <label>
                            <input className="with-gap"
                                name="group3"
                                type="radio"
                                data-type='all'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'} />
                            <span>All</span>
                        </label>

                        <label>
                            <input className="with-gap"
                                name="group3"
                                type="radio"
                                data-type='movie'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>

                        <label>
                            <input className="with-gap"
                                name="group3"
                                type="radio"
                                data-type='series'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;