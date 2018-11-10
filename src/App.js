import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SetList from './components/SetList';
import About from './components/About';
import Set from './components/Set';

const sets = [
  { id: 1,
    title: 'Learn German I', 
    description: 'Learn German nouns with their articles.'
  },
  { id: 2,
    title: 'Learn historic dates', 
    description: 'Learn important historic dates, their events and locations.'
  }
];

localStorage.setItem('sets', JSON.stringify(sets));

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path='/' component={ SetList } exact />
            <Route path='/about' component={ About } exact />
            <Route path='/:set_id' component={ Set } />
            <Route component={ SetList } />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
