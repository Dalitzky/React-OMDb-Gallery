import React, { Component } from "react"
import { Link } from 'react-router-dom'
import './Search.css';

export default class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      search: ''
    }
  }

  handleChange(e) {
    this.setState({
        search: e.target.value
      });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.history.push(`/movies/${this.state.search}`);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input type="text" onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleKeyDown(e)} placeholder="Search..." className="search-input"/>
        <Link to={`/movies/${this.state.search}`} className="search-button"/>
      </div>
    )
  }
}
