import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import Error from './components/Error'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App}/>
      <Route path='/movies/:name' component={Movies}/>
      <Route path='/movie/:id' component={MovieDetails}/>
      <Route path='/error' component={Error}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
