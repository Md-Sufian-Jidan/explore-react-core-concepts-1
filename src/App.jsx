import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ToDo task='Learn React'
        isDone={true}>
      </ToDo>
      <ToDo task='Core Concepts'
        isDone={false}>
      </ToDo>
      <ToDo task='Try JSX'
        isDone={true}>
      </ToDo>
      {/* <Device name='Laptop' price='55'></Device>
      <Device name='Mobile' price = '17000'></Device>
      <Device name='Watch' price = '3000'></Device>
      <Person></Person>
      <Student grade='7' score = '99'></Student>
      <Student grade = {12} score={85}></Student>
      <Student></Student>
      <Developer></Developer>  */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This device : {props.name}. price:{props.price}</h2>
}

function Person(props) {
  console.log(props);
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 }
  return <h3>I am a {person.name} with age: {age + money}</h3>
}

const { grade, score } = { grade: '7', score: '99' }
function Student({ grade = 1, score = 0 }) {
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>class: {grade}</p>
      <p>score: {score}</p>
    </div>)
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '50px',
  }
  return (
    <div style={developerStyle}>
      <h5>Dove Devo</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
