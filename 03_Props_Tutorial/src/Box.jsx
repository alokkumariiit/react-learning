import React from 'react'
import './App.css'
function Box({name="Alok Kumar", role="Cloud and Devops"}) {
  return (
    <div className='box'>
      <h1>{name}</h1>
      <h1>{role}</h1>
    </div>
  )
}

export default Box
