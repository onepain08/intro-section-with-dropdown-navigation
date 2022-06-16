import React from 'react'
import './navbar.css'
import { motion, AnimatePresence } from 'framer-motion'

import {MenuItem,} from '../index'

//Assets
import logo from '../../assets/logo.svg'
import {todo, calendar, reminders, planning,} from '../../assets/assets'

const Navbar = () => {

  const [openFeatures, setOpenFeatures] = React.useState(false)
  const [openCompany, setOpenCompany] = React.useState(false)


  const menu = {
    hidden: {height: 0, padding: '0 0', },
    visible: {height: '10rem', padding: '1.5rem 1.6rem',transition: {when: 'beforeChildren',type: 'spring,', duration: 0.2, staggerChildren: 0.1},},
    exit: {height: 0,padding: 0, transition: {when: 'afterChildren',type: 'spring,', duration: 0.1, staggerChildren: 0.1}}
  }

  const menuItem ={
    hidden: {x: -100, opacity: [0,0,0,0]},
    visible: {x: 0, opacity: [0,0.2,0.4,.6,1], transition:{type: 'spring', duration:0.1,},},
    exit: {opacity: [0.8,0.6,0,0,0],x:100, transition: {duration: 0.2}}
  }

  return (
    <div className='navbar'>
        <div className='navbar-logo' id='logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='navbar-links'>
            <li onClick={() => {setOpenFeatures(!openFeatures)}}>
              <div id='features'>
                Features<span className='material-symbols-outlined'>expand_more</span>
              </div>
            </li>
            <li onClick={()=>{setOpenCompany(!openCompany)}}>
              <div id='company'>
                Company<span className='material-symbols-outlined'>expand_more</span>
              </div>
            </li>
            <li><a href='#logo' id='careers'>Careers</a></li>
            <li><a href='#logo'>About</a></li>
        </ul>
        <div className='navbar-login'>Login</div>
        <button className='navbar-register'>Register</button>
        <AnimatePresence>
          {openFeatures && <motion.div key='features' className='navbar-menus navbar-features-menu' initial='hidden' animate='visible' exit='exit' variants={menu}>
            <ul>
              <MenuItem variants={menuItem} img={todo} text={'Todo List'} />
              <MenuItem variants={menuItem} img={calendar} text={'Calendar'} />
              <MenuItem variants={menuItem} img={reminders} text={'Reminders'} />
              <MenuItem variants={menuItem} img={planning} text={'Planning'} />
            </ul>
          </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
          {openCompany &&<motion.div key='company' className='navbar-menus navbar-company-menu' initial='hidden' animate='visible' exit='exit' variants={menu}>
            <ul>
              <MenuItem variants={menuItem} text='History' />
              <MenuItem variants={menuItem} text='Our Team' />
              <MenuItem variants={menuItem} text='Blog' />
            </ul>
          </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default Navbar