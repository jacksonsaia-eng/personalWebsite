import React from 'react';
import './App.css';
import Main from './pages/main';
import SideDrawer from './components/sideDrawer';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App">
      <SideBar className="Side-bar" />
      <header className="App-header">
        {/* <SideDrawer /> */}
        <Main />
      </header>
    </div>
  );
}

export default App;
