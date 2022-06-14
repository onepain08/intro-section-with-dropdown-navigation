import React from 'react'
import './header.css'

//Assetts
import heroImage from '../../assets/image-hero-desktop.png'
import databiz from '../../assets/client-databiz.svg'
import audiphile from '../../assets/client-audiophile.svg'
import meet from '../../assets/client-meet.svg'
import maker from '../../assets/client-maker.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-text-content'>
            <h1>Make remote work</h1>
            <p>Get your team in sync, cno matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
            <button>Learn more</button>
            <div className='header-company-logos'>
                <img src={databiz} alt="" />
                <img src={audiphile} alt="" />
                <img src={meet} alt="" />
                <img src={maker} alt="" />
            </div>
        </div>
        <div className='header-hero-image'>
            <img src={heroImage} alt='' />
        </div>
    </div>
  )
}

export default Header