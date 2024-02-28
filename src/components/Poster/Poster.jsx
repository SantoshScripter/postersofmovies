import React from 'react'

export function Poster({ movieData }) {
    const { Poster, Title, Year } = movieData
    return (
        <div className="cardData" >
            <div className="card">
                <img src={Poster} alt="" />
            </div>
            <div className="detail">
                <div className="mname">{Title}</div>
                <div className="year">{Year}</div>
            </div>
        </div>
    )
}
