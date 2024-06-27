import Box2 from './Box2';
import { useSelector } from 'react-redux';

export default function Box1() {

  const {count} = useSelector((state) => state.counter)
  const {user} = useSelector((state) => state.user)

  return (
    <div className='box'>
      <h1>Box 1</h1>
      <p> First Child component </p>
      <h2> Hello {user.name} </h2>
      <div>The count is {count}</div>
      <Box2 />
    </div>
  )
}
