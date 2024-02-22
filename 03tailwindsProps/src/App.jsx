import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)


  // / to pass the object/
  let myobject = {
    username: "ANkit sharma",
    age: 30,
    sex: "Male",
    height: 5.5
  }

  // to pass the array
  let myarray = [23, 35, "vignan", "bihar"]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded' >this is tailwinds projects..</h1>
      <Card2 />
      <Card />

      {/* call Card function with simple text */}
      <Card channel="RKJ" btntext="kiss me" />

      {/* calling Card function with object or array  it will show error */}

      {/* <Card myobject={name = "Ankit sharma" age=30 sex="Male"}  /> */}

      <Card channel="DJ" myobject={myobject} somearray={myarray} btntext="click me" />
      <Card channel="ILA" myobject={myobject} somearray={myarray} />




    </>
  )
}

export default App
