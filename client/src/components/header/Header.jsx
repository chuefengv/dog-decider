import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/paw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import HamNav from './hamnav/HamNav';
import RegNav from './regnav/RegNav';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';



function Header({setCheckedA, setCheckedB, setCheckedC}){
    //display dropdown menu when hamburger icon is clicked, mobile screen only
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div className='header-wrapper'>
            <div className='header-nav'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt=""></img>
                    </Link>
                </div>
                <div className='title'>
                    <h2>Dog Data Cards</h2>
                </div>
                <div className='reg-nav'>
                    <RegNav setCheckedA={setCheckedA} setCheckedB={setCheckedB} setCheckedC={setCheckedC}/>
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
                <Collapse in={showMenu}>
                    <HamNav setCheckedA={setCheckedA} setCheckedB={setCheckedB} setCheckedC={setCheckedC}/>
                </Collapse>
            </div>
        </div>
    );
};

export default Header;