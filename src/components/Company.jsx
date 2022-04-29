import React, { useState } from 'react'
import iconDown from '../images/icon-arrow-down.svg'
import iconUp from '../images/icon-arrow-up.svg'

const Company = () => {
    const [showCompany, setShowCompany] = useState(false)
    const handleShowCompany = () => {
        setShowCompany(!showCompany)
    }
  return (
    <section>
        <div onClick={handleShowCompany} className='d-flex content-between nav-pop'>
            <p>Company</p>
            {showCompany ? 
              <img src={iconUp} alt="icon-down" className='arrow-icon' />
              :
              <img src={iconDown} alt="icon-up" className='arrow-icon' />
            }
        </div>
       {showCompany && 
        <div className='pop-up-company'>
          <p>History</p>
          <p>Our Teams</p>
          <p>Blog</p>
      </div>
       }
    </section>
  )
}

export default Company