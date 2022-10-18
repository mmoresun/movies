import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [movies, setMovies] = useState('');
    const [loading, setLoading] = useState(true);

    const handleSearch = (searchString, searchType = 'all') => {
        setLoading(true)

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}${searchType !== 'all' ? `&type=${searchType}` : ''}`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false)
            }

            )
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    useEffect(() => {

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])

    return (

        <div className='container content'>

            <Search handleSearch={handleSearch} />

            {loading ? <h5><Preloader /></h5> : <MovieList movies={movies} />}

        </div>)


}

export default Main;
