import React, { useState } from 'react'
import iconDown from '../images/icon-arrow-down.svg'
import iconUp from '../images/icon-arrow-up.svg'
import iconTodo from '../images/icon-todo.svg'
import iconCalendar from '../images/icon-calendar.svg'
import iconReminder from '../images/icon-reminders.svg'
import iconPlanning from '../images/icon-planning.svg'

const Features = () => {
    const [showFeatures, setShowFeature] = useState(false)
    
    const handleShowFeatures = () => {
      setShowFeature(!showFeatures)
    }

  return (
    <section>
        <div onClick={handleShowFeatures} className='d-flex content-between nav-pop'>
            <p>Feature</p>
            {showFeatures ? 
              <img src={iconUp} alt="icon-Up" className='arrow-icon' />
              :
              <img src={iconDown} alt="icon-Down" className='arrow-icon' />
            }
        </div>
        {showFeatures && 
         <div className='pop-up-features'>
           <div className='d-flex feature-content'>
             <img src={iconTodo} alt="icon-todo" className='features-icon' />
             <p>Todo List</p>
           </div>
           <div className='d-flex feature-content'>
             <img src={iconCalendar} alt="icon-calendar" className='features-icon'  />
             <p>Calendar</p>
           </div>
           <div className='d-flex feature-content'>
             <img src={iconReminder} alt="icon-reminders" className='features-icon'  />
             <p>Reminders</p>
           </div>
           <div className='d-flex feature-content'>
             <img src={iconPlanning} alt="icon-planning" className='features-icon'  />
             <p>Planning</p>
           </div>
         </div>
        }
    </section>
  )
}

export default Features