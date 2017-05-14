import React, { Component } from "react"
import { Link, Redirect } from 'react-router-dom'
import { getMovie } from '../api/movies'
import './MovieDetails.css'

export default class MovieDetails extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: {
         Title: "",
         Year: "",
         Director: "",
         Plot: "",
         Poster: "",
         Ratings: [],
         Error: "",
         Response: ""
      },
      search: ''
    }
  }

  componentWillMount() {
     this.fetchMovieDetails(this.props.match.params.id)
  }

  fetchMovieDetails(id = '') {
    const search = this.props.location.state ? this.props.location.state.search : this.state.search;

    getMovie(id)
    .then((data) => {
      this.setState({
        data,
        search
      });
    });
  }

  renderMovieDetails() {
    const { Title, Director, Plot, Poster, Error, Response } = this.state.data;

    if (Response === 'False'){
      return <Redirect to={{ pathname: '/error', state: { error: Error } }}/>
    } else {
      return (
      <div className="info-card">
        <Link to={`/movies/${this.state.search}`} className="close-button"/>
        <img className="info-image" src={Poster} alt={Title}/>
        <div className="info-data">
          <h1>{Title}</h1>
          <h3>by {Director}</h3>
          <p>{Plot}</p>
        </div>
      </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderMovieDetails()}
      </div>
    )
  }
}
