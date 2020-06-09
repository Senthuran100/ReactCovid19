import React from 'react';
import { Home } from './components/Home'
import { Countries } from './components/Countries'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="home">Covid19</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home"> Home </Nav.Link>
            <Nav.Link href="countries"> Countries </Nav.Link>
            <Nav.Link href="search"> Search </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/home" exact component={Home} />
        <Route path="/countries" exact component={Countries} />
        <Route path="/search" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
