import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Home from "../components/Home";
import GameShowContainer from "./GameShowContainer";
import HomeContainer from "./HomeContainer";
import CommentTile from "../components/CommentTile";
import CommentContainer from "./CommentContainer";

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
      <Route path="/games/:id" component={CommentTile}/>
      <Route path='/games/:id' component={GameShowContainer} />
     </Router>
    )
  }
}
export default App;
