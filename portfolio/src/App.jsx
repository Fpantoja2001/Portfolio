import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main/main'

function App() {
  return (
    <div className="App">
      <div className='components'>
        <Navbar/>
        <Main />
      </div>
    </div>
  );
}

export default App;