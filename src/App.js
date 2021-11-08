// import React, { useState } from 'react'
// import Copmusestate from './Components/Copmusestate'
// import FirstComponent from './Components/FirstComponent'
// import Header from './Components/Header'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Data from './Components/Data/Data.json';

function App() {

  return (
    <>
      <div className="my_data">
        {Data.map(post => {
          return (
            <div>
              <h1>{post.id}</h1>
              <h2>{post.first_name}</h2>
              <h3>{post.last_name}</h3>
              <h4>{post.email}</h4>
              <h5>{post.gender}</h5>
              <h6>{post.ip_address}</h6>
            </div>
          )
        })}
      </div>
    </>
  )
}


export default App


