import React, { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Autho from './Components/Autho'
// import TrueUser from './Components/TrueUser'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import ThirdComponent from './Components/ThirdComponent'



function App() {
  const [status, setStatus] = useState(1)
  // console.log('app', status);


  const prevHandler = () => {

    console.log('prevHandler', status);
    if (status === 1) {
      return setStatus(3);
    }
    return setStatus(status - 1);

  }


  const nextHandler = () => {

    console.log('prevHandler', status);
    if (status === 3) {
      return setStatus(1);
    }
    return setStatus(status + 1);

  }



  return (
    <>
      {status === 1 && <FirstComponent />}
      {status === 2 && <SecondComponent />}
      {status === 3 && <ThirdComponent />}

      <button onClick={prevHandler}>
        КНОПКА
      </button>

      <button onClick={nextHandler}>
        КНОПКА
      </button>

    </>
  )
}

export default App
