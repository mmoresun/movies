import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {

        movies: [],
        loading: true,

    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            })
    }

    handleSearch = (searchString, searchType = 'all') => {
        this.setState({ loading: true })
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}${searchType != 'all' ? `&type=${searchType}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            })

    }

    render() {

        const { movies, loading } = this.state;

        return (

            <div className='container content'>

                <Search handleSearch={this.handleSearch} />

                {loading ? <h5><Preloader /></h5> : <MovieList movies={this.state.movies} />}

            </div>)
    }

}

export default Main;
