import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/slices/counterSlice'

import Box1 from './components/Box1'
import './App.css'


function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)

  return (
    <>
    <Box1 />
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => {dispatch(increment())}}>
          incement 
        </button>
        <button onClick={() => {dispatch(decrement())}}>
          decrement
        </button>
        
      </div> 
    </>
  )
}

export default App
