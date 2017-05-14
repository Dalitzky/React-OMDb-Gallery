import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class Movie extends Component {
  render() {
    const { movie, search } = this.props;

    return (
      <li className="movie-item">
        <Link to={{ pathname: `/movie/${movie.imdbID}`, state: { search } }}>
          <img className="movie-image" src={movie.Poster} alt={movie.Title}/>
          <div className="movie-details">{movie.Title} ({movie.Year})</div>
        </Link>
      </li>
    )
  }
}
