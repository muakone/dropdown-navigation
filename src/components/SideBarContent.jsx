import React from 'react'
import menuClose from '../images/icon-close-menu.svg'
import Company from '../components/Company'
import Features from '../components/Features'

const SideBarContent = ({handleShowMenu}) => {
  return (
    <div>
        <div onClick={handleShowMenu} className='menu-close'>
            <img src={menuClose} alt="menu-close" />
        </div>
        <div>
            <nav className='nav-mobile'>
                <Features className='nav-link' />
                <Company className='nav-link' />
                <p className='nav-link'>Careers</p>
                <p className='nav-link'>About</p>
            </nav>
        </div>
    </div>
  )
}

export default SideBarContent