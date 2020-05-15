import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

import { HomeContainer } from './Pages/homeContainer';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Pokédex</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
