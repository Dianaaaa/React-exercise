import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ListContacts from './components/ListContacts'

const contacts = [
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: '@richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg'
  },
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: '@karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: '@tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
