import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchField} from "./components/SearchField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchField/>
      </header>
    </div>
  );
}

export default App;
