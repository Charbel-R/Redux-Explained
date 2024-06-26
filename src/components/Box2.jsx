
import Box3 from './Box3'

export default function Box2(props) {

  const { age } = props.user;

  return (
    <div className='box'>
      <h2>Box 2 - <span>Second Child component </span></h2>
      <h3> You are {age} years old </h3>
      <Box3 user={props.user} count={props.count} />
    </div>
  )
}
