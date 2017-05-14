import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import { searchMovies } from '../api/movies'
import Movie from './Movie'
import './Movies.css'

export default class Movies extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {
        Search: [],
        Error: '',
        Response: ''
      },
      search: ''
    }
  }

  componentDidMount() {
     this.fetchMovies(this.props.match.params.name)
  }

  componentWillReceiveProps(newProps) {
     this.fetchMovies(newProps.match.params.name)
  }

  fetchMovies(name = '') {
    searchMovies(name)
    .then((data) => {
      this.setState({
        data,
        search: name
      });
    });
  }

  renderMovies() {
    const { Search, Error, Response } = this.state.data;

    if (Response === 'False'){
      return <Redirect to={{ pathname: '/error', state: { error: Error } }}/>
    } else {
      return Search.map((movie) => {
        return <Movie key={movie.imdbID} movie={movie} search={this.state.search} />
      });
    }
  }

  render() {
    return (
      <ul className="movies-list">
        {this.renderMovies()}
      </ul>
    )
  }
}
