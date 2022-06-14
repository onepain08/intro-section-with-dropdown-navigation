import React from 'react'
import './navbar.css'

import {MenuItem,} from '../index'

//Assets
import logo from '../../assets/logo.svg'
import {todo,} from '../../assets/assets'

const Navbar = () => {

  const [openFeatures, setOpenFeatures] = React.useState(false)


  return (
    <div className='navbar'>
        <div className='navbar-logo' id='logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul>
            <li onClick={() => {setOpenFeatures(!openFeatures)}}>
              <a href='#logo'>
                Features
                <span className='material-symbols-outlined'>expand_more</span>
              </a>
            </li>
            <li><a href='#logo'>Company<span className='material-symbols-outlined'>expand_more</span></a></li>
            <li><a href='#logo' id='careers'>Careers</a></li>
            <li><a href='#logo'>About</a></li>
        </ul>
        <div className='navbar-login'>Login</div>
        <button className='navbar-register'>Register</button>
        {openFeatures && <div className='navbar-features-menu'>
          <ul>
            <MenuItem img={todo} text={'Todo List'} />
            <MenuItem text={'Todo List'} />
            <MenuItem text={'Todo List'} />
            <MenuItem text={'Todo List'} />
          </ul>
        </div>}
    </div>
  )
}

export default Navbar