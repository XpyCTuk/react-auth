import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ContactFormComponent from './Components/contact_form_component';
import Autho from './Components/Autho';
import TrueUser from './Components/TrueUser';

const status = true

function App() {
  return (
    // <ContactFormComponent />
    <>
      <Autho />
      <TrueUser />
    </>
  );
}

export default App;


