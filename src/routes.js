import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'


export default function routes() {
    return (
      <Router>
        <div>
            hello
          <Link to="/">Home</Link>
        </div>
       
  
        <hr />
  
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Routes>
      </Router>
    );
  }