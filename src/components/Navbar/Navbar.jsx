import React from 'react'
import './navbar.css'

//Assets
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'><img src={logo} /></div>
        <ul>
            <li><a href='#'>Features<span className='material-symbols-outlined'>expand_more</span></a></li>
            <li><a href='#'>Company<span className='material-symbols-outlined'>expand_more</span></a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>About</a></li>
        </ul>
        <div className='navbar-login'>Login</div>
        <button className='navbar-register'>Register</button>
    </div>
  )
}

export default Navbar