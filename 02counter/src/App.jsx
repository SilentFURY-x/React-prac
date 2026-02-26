import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 15;

  const increment = () => {
    counter++;

    setCounter(counter);
  }

  const decrement = () => {
    if (counter > 0) {
      counter--;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>ARJUN'S COUNTER</h1>

      <h2>Counter Value: {counter}</h2>
      <button onClick={increment}>Increment</button> <br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
