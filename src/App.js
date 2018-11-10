import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import SetList from './components/SetList'

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
        <NavBar />
        <SetList />
      </div>
    );
  }
}

export default App;
