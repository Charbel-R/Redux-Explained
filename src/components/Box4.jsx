
import { useSelector } from 'react-redux';

export default function Box4() {

  const { count } = useSelector((state) => state.counter)
  const { user } = useSelector((state) => state.user)

  return (
    <div className='box'>
      <h2>Box 4 - <span>4th child component</span></h2>
      <h4> GoodBye {user.name} </h4>
      <h4> The Final count is {count} </h4>
    </div>
  )
}
