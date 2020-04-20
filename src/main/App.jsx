import React from 'react';

import './App.css';

import Header from '../template/header';
import SideBar from '../template/side-bar';
import Main from '../template/main'

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
