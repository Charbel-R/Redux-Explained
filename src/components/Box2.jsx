import { useSelector } from 'react-redux'
import Box3 from './Box3'

export default function Box2() {

 const {user} = useSelector((state) => state.user)
  
  return (
    <div className='box'>
      <h2>Box 2 - <span>2nd Child component </span></h2>
      <h3> You are {user.age} years old </h3>
      <Box3  />
    </div>
  )
}
