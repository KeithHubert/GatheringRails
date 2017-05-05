import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Home from "../components/Home";
import GameIndexContainer from "./GameIndexContainer";
import GameShowContainer from "./GameShowContainer";
import NewGameFormContainer from "./NewGameFormContainer";

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
      <Route path="/games" component={GameIndexContainer}/>
      <Route path="/games/new" component={NewGameFormContainer}/>
      <Route path="/games/:id" component={GameShowContainer}/>
     </Router>
    )
  }
}
export default App;
