import React from 'react';
import './HamNav.css'

function HamNav(){
    return(
        <div className='hamnav-wrapper'>
            <ul className='nav-choices'>
                <a href='/'>Home</a>
                <a href='#dogsize'>Sizes</a>
                <a href='https://github.com/chuefengv/dog-decider'>Github</a>
            </ul>
        </div>
    )
}

export default HamNav;