import { useState } from 'react'

import Box1 from './components/Box1'
import './App.css'


function App() {
  
  const [count, setCount] = useState(0)

  const user = {
    name: 'John',
    age: 25
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count - 1)}>decrement</button>
      </div> 
      <Box1 count={count} user={user}/>
    </>
  )
}

export default App
