/* eslint-disable react/prop-types */
import Box2 from './Box2';


export default function Box1(props) {

  const { name } = props.user;

  return (
    <div className='box'>
      <h2>Box 1 - <span>1st child component</span></h2>
      <h3> Hello {name} </h3>
      <Box2 user={props.user} count={props.count}/>
    </div>
  )
}
