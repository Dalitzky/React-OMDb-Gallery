import React, { Component } from 'react'
import Search from './Search'

class App extends Component {
  render() {
    return (
      <div>
         <Search  {...this.props}/>
      </div>
    )
  }
}

export default App;
