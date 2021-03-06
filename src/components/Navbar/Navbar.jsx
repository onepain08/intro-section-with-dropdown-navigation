import React from 'react'
import './navbar.css'
import { motion, AnimatePresence } from 'framer-motion'

import {MenuItem,} from '../index'

//Assets
import logo from '../../assets/logo.svg'
import {todo, calendar, reminders, planning, menuBtn, closeMenu, arrowUp, arrowDown} from '../../assets/assets'

const Navbar = () => {

  const [openFeatures, setOpenFeatures] = React.useState(false)
  const [openCompany, setOpenCompany] = React.useState(false)
  const [openMobileMenu, setOpenMenuMobile] = React.useState(false)

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

  const mobileMenu ={
    hidden: {width:0, height:0, padding: 0},
    visible: {width: '64%', height: '100%', padding: '1.3rem 1.3rem'},
  }

  const features ={
    visible: {height: '13rem'}
  }
  const company ={
    visible: {height: '11rem'}
  }

  return (
    <div className='navbar'>
        <div className='navbar-logo' id='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-hamburger-btn'>
          <img src={menuBtn} alt="" onClick={()=>{setOpenMenuMobile(!openMobileMenu)}} />
        </div>
        <motion.ul className='navbar-links'  animate={openMobileMenu ? 'visible' : ''} exit='hidden' variants={mobileMenu}>
            {openMobileMenu &&<div className='navbar-hamburger-exit' onClick={()=>{setOpenMenuMobile(!openMobileMenu)}}>
                <img src={closeMenu} alt="" />
            </div>}
            <li onClick={() => {setOpenFeatures(!openFeatures)}}>
              <motion.div id='features' animate={openFeatures & openMobileMenu ? 'visible' : ''} variants={features}>
                <div>
                  Features <img src={openFeatures? arrowUp : arrowDown} alt="" />
                </div>
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
              </motion.div>
            </li>
            <li onClick={()=>{setOpenCompany(!openCompany)}}>
              <motion.div id='company' animate={openCompany & openMobileMenu ? 'visible': ''} variants={company}>
                <div>
                  Company<img src={openCompany? arrowUp : arrowDown} alt="" />
                </div>
                <AnimatePresence>
                  {openCompany &&<motion.div key='company' className='navbar-menus navbar-company-menu' initial='hidden' animate='visible' exit='exit' variants={menu}>
                    <ul>
                      <MenuItem variants={menuItem} text='History' />
                      <MenuItem variants={menuItem} text='Our Team' />
                      <MenuItem variants={menuItem} text='Blog' />
                    </ul>
                  </motion.div>}
                </AnimatePresence>
              </motion.div>
            </li>
            <li><a href='#logo' id='careers'>Careers</a></li>
            <li><a href='#logo'>About</a></li>
            {openMobileMenu &&<div className='navbar-login-mobile'>Login</div>}
            {openMobileMenu &&<button className='navbar-register-mobile'>Register</button>}
        </motion.ul>
        <div className='navbar-login'>Login</div>
        <button className='navbar-register'>Register</button>
        {openMobileMenu &&<div className='shadow-overlay'></div>}
    </div>
  )
}

export default Navbar