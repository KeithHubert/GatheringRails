import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Home from "../components/Home";
import GameShowContainer from "./GameShowContainer";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/games/:id" component={GameShowContainer}/>
      <Route path='/games/:id/edit' component={GameShowContainer} />
     </Router>
    )
  }
}
export default App;
