import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Navigation from './Navigation'
import Login from './Login'
import Hero from './Hero'
import MessageForm from './ChatMsg'
import Message from './Message'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
      <Hero />

    </div>
  );
}

export default App;
