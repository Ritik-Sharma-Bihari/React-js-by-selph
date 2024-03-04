import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  // for the copy the password we are cerating a variable which work as refrence

  // userCallback hook
  //const cachedFn = useCallback(fn, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      // making password based on length
      let char = Math.floor(Math.random() * str.length + 1) // it give index number (ex-7 or 9) 
      pass += str.charAt(char)
      // pass has charecter password with respect to length..

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  // copy the password
  const copyPasswordToClipboard = useCallback(() => {
    // to show the selcted effect
    passwordRef.current?.select();
    // to set the range can select by user more than 999 charcter can't select
    passwordRef.current?.setSelectionRange(0, 999);
    // to copy the charecter 
    window.navigator.clipboard.writeText(password)
    let text = document.getElementById("password-text");
    text.textContent = "copyed"
  }, [password])

  //passwordGenerator() we can't directry call the passwordGenerator() beacuse it is a hook 
  // so we need to syc it for that using the useEffect hook

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        // to give the refrence 
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          id="password-text"
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            // to set the min and max value range
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            // to change the lenght by user 
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              // to set the previous to rever 
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
