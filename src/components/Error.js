import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import './Error.css'

export default class Error extends Component {

  render() {
    if (this.props.location.state)
    {
      const error =  this.props.location.state.error

      return (
        <div className="error">
          <span>{error}</span>
        </div>
      )
    } else {
      return <Redirect to={`/`}/>
    }
  }
}
