/* eslint-disable react/prop-types */

export default function Box4(props) {

  const { name } = props.user;

  return (
    <div className='box'>
      <h2>Box 4 - <span>4th child component</span></h2>
      <h4> GoodBye {name} </h4>
      <h4> The Final count is {props.count} </h4>
    </div>
  )
}
