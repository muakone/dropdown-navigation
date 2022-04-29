import React from 'react'
import ClientMeet from '../images/client-meet.svg'
import ClientMaker from '../images/client-maker.svg'
import ClientDatabiz from '../images/client-databiz.svg'
import ClientAudiophile from '../images/client-audiophile.svg'

const Content = () => {
  return (
    <section className='content d-flex content-between'>
        <div className='content-list'>
            <h1>Make remote work</h1>
            <div>
                <p>
                 Get your team in sync, no matter your location. Streamline processes, 
                 create team rituals, and watch productivity soar.
                </p>
            </div>
            <div className='learn-more'>
                <button>Learn More</button>
            </div>
            <div>
                <div className='d-flex content-brands'>
                    <img src={ClientDatabiz} alt="client-databiz" />
                    <img src={ClientAudiophile} alt="client-audiophile" />
                    <img src={ClientMeet} alt="client-meet" />
                    <img src={ClientMaker} alt="client-maker" />
                </div>
            </div>
        </div>
        <div className='content-bg'></div>
    </section>
  )
}

export default Content