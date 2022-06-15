import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'

import {MenuItem,} from '../index'

//Assets
import logo from '../../assets/logo.svg'
import {todo, calendar, reminders, planning,} from '../../assets/assets'

const Navbar = () => {

  const [openFeatures, setOpenFeatures] = React.useState(false)
  const [openCompany, setOpenCompany] = React.useState(false)


  return (
    <div className='navbar'>
        <div className='navbar-logo' id='logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='navbar-links'>
            <li onClick={() => {setOpenFeatures(!openFeatures)}}>
              <a href='#logo'>
                Features<span className='material-symbols-outlined'>expand_more</span>
              </a>
            </li>
            <li onClick={()=>{setOpenCompany(!openCompany)}}>
              <a href='#logo'>
                Company<span className='material-symbols-outlined'>expand_more</span>
              </a>
            </li>
            <li><a href='#logo' id='careers'>Careers</a></li>
            <li><a href='#logo'>About</a></li>
        </ul>
        <div className='navbar-login'>Login</div>
        <button className='navbar-register'>Register</button>
        {openFeatures && <motion.div className='navbar-menus navbar-features-menu'
          initial={{
            height: 0,
            padding:0,
            opacity:0,
          }}
          animate={{
            height: '10rem',
            opacity:1,
            padding:'1.5rem',
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <ul>
            <MenuItem img={todo} text={'Todo List'} />
            <MenuItem img={calendar} text={'Calendar'} />
            <MenuItem img={reminders} text={'Reminders'} />
            <MenuItem img={planning} text={'Planning'} />
          </ul>
        </motion.div>}
        {openCompany &&<div className='navbar-menus navbar-company-menu'>
          <ul>
            <MenuItem text='History' />
            <MenuItem text='Our Team' />
            <MenuItem text='Blog' />
          </ul>
        </div>}
    </div>
  )
}

export default Navbar