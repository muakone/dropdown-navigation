import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menuOpen from '../images/icon-menu.svg'
import SideBarContent from '../components/SideBarContent'

const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <section className='display-mobile d-flex content-between'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='slide-sidebar'>
            <img src={menuOpen} alt="menu-open" className='menu-open' onClick={handleShowMenu} />
            <div>
            {
            showMenu && 
            <div className='side-menu-bg'>
                <div className='side-menu'>
                    <SideBarContent handleShowMenu={handleShowMenu} />
                </div>
            </div>
            }
            </div>
            
        </div>
    </section>
  )
}

export default MobileNav