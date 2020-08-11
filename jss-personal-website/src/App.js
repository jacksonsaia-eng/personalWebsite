import React from 'react';
import './App.css';
import Main from './pages/main';
import SideDrawer from './components/sideDrawer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideDrawer />
        <Main />
      </header>
    </div>
  );
}

export default App;
