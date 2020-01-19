import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route path = '/'component = {Home}></Route>
      </BrowserRouter>
  );
}

export default App;
