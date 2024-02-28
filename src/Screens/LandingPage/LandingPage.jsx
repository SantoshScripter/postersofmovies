import React from 'react'
import { SearchBox, FlatList, Poster, DisplayBox, ErrorModel } from '../../components'
import { useGetMoviesAPI } from '../../hooks';
import { ERROR_MSG } from '../../utils';

export function LandingPage() {

    const [{ posterData, showErrorModel, errorMsg }, { fetchPosterOfMoviesBy, handleErrorModelState }] = useGetMoviesAPI()

    const onSearch = (searchKey) =>
        fetchPosterOfMoviesBy(searchKey)


    const renderPostersOfMovies = (movieData, id) => < Poster movieData={movieData} key={id} />

    return (
        <>
            <h1>MOVIES</h1>
            <div className="movies">
                <SearchBox onSearch={onSearch} />
            </div>
            <hr />
            <div className="container">
                <FlatList arr={posterData} renderComponent={renderPostersOfMovies} />
            </div>
            <hr />
            <DisplayBox show={showErrorModel} >
                <ErrorModel errorMsg={ERROR_MSG[errorMsg]} onClose={handleErrorModelState} />
            </DisplayBox>
        </>
    )
}