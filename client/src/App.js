import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <br />
            <h1 className='text-center'>My To-Do List</h1>
            <br />
            <br />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
