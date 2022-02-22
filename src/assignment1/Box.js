import React from 'react'
const inl = {
  color : 'blue',
  marginLeft : '28%'
}

const Box = () => {
  return (
    <div className='box_of'>
      <h1>This is Created using functional Component</h1> 
      <p className='Ext'>This is done using external CSS</p>
      <p style={ inl }>This is done using inline CSS</p>
    </div>
  )
}

export default Box
