// import React, { useState } from 'react'
// import Copmusestate from './Components/Copmusestate'
// import FirstComponent from './Components/FirstComponent'
// import Header from './Components/Header'
// import MainData from './Components/MainData';
// import SecondaryData from './Components/SecondaryData';
// import Data from './Components/Data/Data.json';

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Lang from './Components/Lang'
import Id from './Components/Id'
import IdLang from './Components/Data/IdLang.json';

function App() {


  return (
    <>
      <Id IdLang={IdLang} />
      <Lang IdLang={IdLang} />
    </>
  )
}

export default App



{/* <MainData data={Data} />
      <SecondaryData data={Data} /> */}