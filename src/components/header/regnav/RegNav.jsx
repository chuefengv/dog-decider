import React from 'react';
import './RegNav.css'

function RegNav(){
    return(
        <div>
            <ul className='nav-choices-2'>
                <a href='/'>Home</a>
                <a href='#dogsize'>Sizes</a>
                <a href='https://github.com/chuefengv/dog-decider'>Github</a>
            </ul>
        </div>
    )
}

export default RegNav;