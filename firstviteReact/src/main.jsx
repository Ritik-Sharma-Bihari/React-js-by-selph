import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ---- part-1 --------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
  // we call it like App() also beaucse it is function.. but not App 
)

//-----------part-2 ---------------------------------------------------
// this is the custum code which is customize by selph.

// const reactElement = {

//   // in react bundaler goes to convert in into jsx internalling 
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'

//   },
//   children: 'click me to visit Google'
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   //  reactElement() - can't call like this beacuse it is a objectso we need to giverefrence for it 
//   // so current one is - 
//   // reactElement

// )
//----------------------- the <App/> will be converted like above  custom code. code into react internally
// but it will not run  beacuse the syntax problem which is define by owr selph that custum code....


// --------part-3 -------------------------------------------------------------------------------

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
//------
// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherElement
//   // we can't use it like anotherElement() or <anotherElement/> beause it is not function..
// )
// it will work beacuse the syntex are understandelane by react.


// ----------part-4 ------------------------------------
// to undestand the react to custum code 

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  //anotherElement 
  // the anotherElement this is the other variable which we put here..
  anotherUser
)
// here React is a function which as createElement predefine.. tag..
ReactDOM.createRoot(document.getElementById('root')).render(
  //anotherElement
  // we can't use it like anotherElement() or <anotherElement/> beause it is not function..
  reactElement
)