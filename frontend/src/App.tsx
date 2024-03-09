import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainApp } from './components/MainApp';
import { LoaderProvider } from './components/Loader';

function App() {
  return (
    <div className="App">
      <LoaderProvider id={1}>
        <MainApp/>
        
      </LoaderProvider>
    </div>
  );
}

export default App;
