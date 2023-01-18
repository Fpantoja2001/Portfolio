import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main/main'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
          <div className='components'>
              <Projects/>
        <Main />
      </div>
    </div>
  );
}

export default App;