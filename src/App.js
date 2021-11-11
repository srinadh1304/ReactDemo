import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import { Route,Link,Routes,BrowserRouter } from 'react-router-dom'  

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        
        <Routes>
        
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route> 

        </Routes>
      
    
  </BrowserRouter>  
  );
  }
  }
  

export default App;