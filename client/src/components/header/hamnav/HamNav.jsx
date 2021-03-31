import React from 'react';
import './HamNav.css'
import { Link } from 'react-router-dom';



function HamNav({setCheckedA, setCheckedB, setCheckedC}){
    
    function showAll(){
        setCheckedA(true);
        setCheckedB(true);
        setCheckedC(true);
    }
    return(
        <div className='hamnav-wrapper'>
            <ul className='nav-choices'>
                <Link to='/'>Home</Link>
                <Link to='#/show-dogs' onClick={()=>showAll()}>Breeds</Link>
                <a href='https://github.com/chuefengv/dog-decider'>Github</a>
            </ul>
        </div>
    )
}

export default HamNav;