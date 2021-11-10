import React from 'react';
import './App.css';
import logo from './assets/download.jpeg'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title :'Hello from bridgelabz'
    }
  }
  render() 
  {
    return (
        <div>
          <h1>{this.state.title}</h1>
          <img src = {logo} alt ="The Bridgelabz logo: a Bridge to Employment through lab works"/>
        </div>
    );
  }
}
export default App;