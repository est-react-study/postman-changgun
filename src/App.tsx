import React from 'react';
import './App.scss';
import LeftSideBar from './components/LeftSideBar';
import RequestPane from './components/RequestPane';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <RequestPane />
    </div>
  );
}

export default App;
