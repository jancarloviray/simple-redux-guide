import React, { Component } from 'react'
import ContainerComponent from './ContainerComponent'
import MixedComponent from './MixedComponent'

class App extends Component {
  render(){
    return (
      <div>
        <MixedComponent />
        <ContainerComponent />
      </div>
    )
  }
}

export default App;
