import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import SetList from './components/SetList'

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
