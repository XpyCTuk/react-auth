import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Autho from './Components/Autho';
import TrueUser from './Components/TrueUser';

const status = true

function App() {

  return (
    <>
      <Autho />
      <TrueUser />
    </>
  );
}

export default App;


