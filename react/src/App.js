import React, { Component } from 'react'

class App extends Component {
  constuctor(props){
    super(props);
    this.state = {
      ids: []
    }
  }

  render(){
    return(
      <div>
        <h1>Sign In</h1>
        <h1>Sign Up</h1>
      </div>
    )
  }
}

export default App;
