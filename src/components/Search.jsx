import React, { useState } from 'react';

const Search = (props) => {

    const {
        handleSearch = Function.prototype,
    } = props;

    const [search, setSearch] = useState('armageddon');
    const [type, setType] = useState('all');

    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {

            handleSearch(search, type);
        }
    }

    const handleFilter = (e) => {

        setType(e.target.dataset.type);
        handleSearch(search, e.target.dataset.type);
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder='Search by movie title'
                        type='search'
                        className="validate"
                        value={search}                        
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() => handleSearch(search, type)}
                    >Search</button>
                </div>
                <div>
                    <label>
                        <input className="with-gap"
                            name="group3"
                            type="radio"
                            data-type='all'
                            onChange={handleFilter}
                            checked={type === 'all'} />
                        <span>All</span>
                    </label>

                    <label>
                        <input className="with-gap"
                            name="group3"
                            type="radio"
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>

                    <label>
                        <input className="with-gap"
                            name="group3"
                            type="radio"
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>

                </div>
            </div>

        </div>
    );

}

export default Search;