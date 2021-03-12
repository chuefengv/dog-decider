import React from 'react';
import './Header.css'

function Header(){
    return(
        <div className='header-wrapper'>
            <div className='header-git'>
                Github
            </div>
            <div className='header-title'>
                Dog Decider
            </div>
            <div className='header-creator'>
                Chuefeng Vang
            </div>
        </div>
    );
};

export default Header;