import React, { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Copmusestate from './Components/Copmusestate'


function App() {

  const [player1Counter, setPlayer1Counter] = useState(10)
  const [player2Counter, setPlayer2Counter] = useState(10)

  return (
    <div>
      <div>
        <div>Иван Иванов</div>
        <div>{player1Counter}</div>
        <button onClick={() => {
          setPlayer1Counter(player1Counter + 1)
        }}>+</button>
      </div>
      <hr />
      <div>
        <div>Марина Абобовна</div>
        <div>{player2Counter}</div>
        <button onClick={() => {
          setPlayer2Counter(player2Counter + 1)
        }}>+</button>
      </div>
      <hr />
      <button onClick={() => {
        setPlayer1Counter(player1Counter - 1)
        setPlayer2Counter(player2Counter - 1)
      }}>-</button>
      <button onClick={() => {
        setPlayer1Counter(player1Counter + 1)
        setPlayer2Counter(player2Counter + 1)
      }}>+</button>
    </div>
  )
}


export default App


