import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Home from "../components/Home";
import GameShowContainer from "./GameShowContainer";
import HomeContainer from "./homeContainer";
import NearMeGameIndexContainer from "./NearMeGameIndexContainer";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}/>
      <Route path='/games/:id' component={GameShowContainer} />
      <Route path="/games" component={NearMeGameIndexContainer} />
     </Router>
    )
  }
}
export default App;
