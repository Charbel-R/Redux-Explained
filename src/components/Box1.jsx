import Box2 from './Box2';
import { useSelector } from 'react-redux';

export default function Box1() {

  const {count} = useSelector((state) => state.counter)
  const {user} = useSelector((state) => state.user)

  return (
    <div className='box'>
      <h2>Box 1 - <span>1st child component</span></h2>
      <h3> Hello {user.name} </h3>
      <div>The count is {count}</div>
      <Box2 />
    </div>
  )
}
