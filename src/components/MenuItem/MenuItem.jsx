import React from 'react'
import './menu-item.css'
import { motion } from 'framer-motion'

const MenuItem = (props) => {
  return (
    <motion.li variants={props.variants} className='menu-item'>
        <img src={props.img} alt="" />
        <h4>{props.text}</h4>
    </motion.li>
  )
}

export default MenuItem;