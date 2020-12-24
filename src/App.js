import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import NavBar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Expert from './components/Expert/Expert'
import About from './components/About/about'
function App() {
  
  return (
    <>
    <Container>
      <NavBar/>
      <Hero/>
      <Expert/>
      <About/>
    </Container>
    
    <Router>
    <Switch>
          <Route path="/expert" component={Expert}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      
    </Router>

    </>
  );
}

export default App;
