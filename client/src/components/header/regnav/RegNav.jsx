import React from 'react';
import './RegNav.css'
import { Link } from 'react-router-dom';

function RegNav({setCheckedA, setCheckedB, setCheckedC}){
    
    //when user clicks link to show all breeds, check all sizes in the filter checkboxes before loading
    function showAll(){
        setCheckedA(true);
        setCheckedB(true);
        setCheckedC(true);
    
    }
    return(
        <div>
            <ul className='nav-choices-2'>
                <Link to='/'>Home</Link>
                <Link to='/show-dogs' onClick={()=>showAll()}>Breeds</Link>
                <a href='https://github.com/chuefengv/dog-decider'>Github</a>
            </ul>
        </div>
    )
}

export default RegNav;