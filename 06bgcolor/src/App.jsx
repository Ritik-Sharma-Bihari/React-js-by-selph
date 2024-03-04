import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      // style used to implements the state...
      // here we are not using the {color} beause variable already inside the double quation
      style={{ backgroundColor: color }}
    //style={{ backgroundColor: "red" }} we can write like also but it makes hard code which is not good beause it is a inline css.

    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"

            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
