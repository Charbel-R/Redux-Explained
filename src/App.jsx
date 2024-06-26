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
    <Box1 count={count} user={user}/>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          incement
        </button>
        <button onClick={() => setCount((count) => count - 1)}>decrement</button>
      
      </div> 
    </>
  )
}

export default App
