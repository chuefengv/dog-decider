import React from 'react';
import './HamNav.css'

function HamNav(){
    return(
        <div className='hamnav-wrapper'>
            <ul className='nav-choices'>
                <li>Home</li>
                <li>Sizes</li>
                <li>Github</li>
            </ul>
        </div>
    )
}

export default HamNav;