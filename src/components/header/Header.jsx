import React from 'react';
import './Header.css'
import logo from '../../assets/paw.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HamNav from './hamnav/HamNav'
import { useState } from 'react';


function Header(){
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div className='header-wrapper'>
            <div className='header-nav'>
                <img src={logo} alt="" className='logo'></img>
                <FontAwesomeIcon 
                    className='hamburger-menu'
                    icon={faBars}
                    onClick={()=>setShowMenu(!showMenu)}
                />
            </div>
            <div>
                {showMenu && <HamNav />}
            </div>
        </div>
    );
};

export default Header;