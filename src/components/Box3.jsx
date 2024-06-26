import React from 'react'
import Box4 from './Box4'

export default function Box3(props) {
  return (
    <div className='box'>
      <h2>Box 3 - <span>3rd child component</span></h2>
      <Box4 user={props.user} count={props.count} />
    </div>
  )
}
