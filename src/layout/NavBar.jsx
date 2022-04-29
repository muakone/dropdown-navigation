import React from 'react'
import Company from '../components/Company'
import Features from '../components/Features'
import logo from '../images/logo.svg'

const NavBar = () => {
  return (
    <section className='d-flex content-between nav-bar'>
        <div className='d-flex nav-brand'>
            <img src={logo} alt="logo" className='logo'/>
            <nav>
                <Features className='nav-link' />
                <Company className='nav-link' />
                <p className='nav-link'>Careers</p>
                <p className='nav-link'>About</p>
            </nav>
        </div>
        <div className='account d-flex'>
            <div className='login'>
                <p>Login</p>
            </div>
            <div className='register'>
                <button>Register</button>
            </div>
        </div>
    </section>
  )
}

export default NavBar