/* eslint-disable react/prop-types */
import Box2 from './Box2';


export default function Box1(props) {

  const { count } = props;
  const { name } = props.user;

  return (
    <div className='box'>
      <h1>Box 1</h1>
      <p> First Child component </p>
      <h2> Hello {name} </h2>
      <div>The count is {count}</div>
      <Box2 user={props.user} count={props.count}/>
    </div>
  )
}
