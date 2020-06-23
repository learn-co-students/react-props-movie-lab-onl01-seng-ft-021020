import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return (
      <div>
        {movieData.map((value, index) => {
          return <MovieCard
            key={index} 
            title= {value.title} 
            IMDBRating = {value.IMDBRating}
            genres = {value.genres}
            poster = {value.poster}/>
        })}
      </div>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
