import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
           <p className = "userCount">Online:</p>
        </nav>
        <main className="messages">Messages List</main>
        <footer className="chatbar">
          <input className="chatbar-username" placeholder='username'/>
          <input className="chatbar-message" placeholder='message'/>
        </footer>
      </div>
    );
  }
}

export default App;
