import React from 'react'
import './menu-item.css'

const MenuItem = (props) => {
  return (
    <li className='menu-item'>
        <img src={props.img} alt="" />
        <h4>{props.text}</h4>
    </li>
  )
}

export default MenuItem;