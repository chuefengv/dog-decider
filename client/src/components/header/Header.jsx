import React from 'react';
import './Header.css';
import logo from '../../assets/paw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import HamNav from './hamnav/HamNav';
import RegNav from './regnav/RegNav';
import { useState } from 'react';


function Header(){
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div className='header-wrapper'>
            <div className='header-nav'>
                <div className='logo'>
                    <a href='/'>
                        <img src={logo} alt=""></img>
                    </a>
                </div>
                <div className='title'>
                    <h2>Dog Data Cards</h2>
                </div>
                <div className='reg-nav'>
                    <RegNav />
                </div>
                    {!showMenu && <FontAwesomeIcon 
                        className='hamburger-menu'
                        icon={faBars}
                        onClick={()=>setShowMenu(!showMenu)}
                    />}
                    {showMenu && <FontAwesomeIcon 
                        className='hamburger-menu'
                        icon={faAngleDoubleUp}
                        onClick={()=>setShowMenu(!showMenu)}
                    />}
            </div>
            <div className='ham-nav'>
                {showMenu && <HamNav/>}
            </div>
        </div>
    );
};

export default Header;