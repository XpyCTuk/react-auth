import React, { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Autho from './Components/Autho'
import TrueUser from './Components/TrueUser'

function App() {
  const [status] = useState(false)

  return (
    <>
      {status === true && <Autho />}
      {status === false && <TrueUser />}
    </>
  )
}

export default App
