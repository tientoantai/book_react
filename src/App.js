import React, { Component } from 'react';
import Header from './common/Header';
import BookList from './home/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <BookList/>
      </div>
    );
  }
}

export default App;
