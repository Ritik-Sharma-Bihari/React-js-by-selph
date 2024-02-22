import { useState } from 'react'
// we are importing the useState hook from react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let number = 10;

  //const [count, setCount] = useState(10) it will show error beacuse we can't change the value of const
  let [count, setCount] = useState(10)
  let [errorSMS, setErrorSMS] = useState();
  // we are giving the default value in useState 
  //count is variable and setCount is a function

  const IncreaseNumber = () => {
    // number = number + 1
    // console.log(number)
    // so the values will change but ata UI that values will not change to change that one we 
    // need to know that React- Hook concept....

    if (count > 20) {
      errorSMS = "value should not be GREATER than 20";
      setErrorSMS(errorSMS)
    }
    else {
      errorSMS = ""
      setErrorSMS(errorSMS)
      count = count + 1
      console.log(count)
      setCount(count)
    }

  }

  const decreaseNumber = () => {
    if (count > 0) {
      errorSMS = ""
      setErrorSMS(errorSMS)
      count = count - 1
      console.log(count)
      setCount(count)
    }
    else {
      errorSMS = "value should not be less than 0";
      setErrorSMS(errorSMS)

    }
  }


  return (
    <>
      <h1>this is simple project on counting the number of clikched</h1>
      {/* <h2>{number}</h2> */}
      <h2>{count}</h2>
      <p>{errorSMS}</p>

      <button type="" onClick={IncreaseNumber}>increse </button>

      {/* here we are given the refrence decreaseNumber of function */}
      <button type="" onClick={decreaseNumber}>decrease</button>
      <p>futter count : {count}</p>
    </>
  )
}

export default App
