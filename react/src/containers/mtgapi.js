import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {}
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ cards: responseData})
      })
  }

  render(){
    return(
      <div>
        <h1> Hello World! </h1>
        <img src={'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=94&type=card'}/>
      </div>
    )
  }
}

export default App;
