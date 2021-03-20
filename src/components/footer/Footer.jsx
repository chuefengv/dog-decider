import React from 'react';

function Footer(){
    return(
        <div className='footer-wrapper'>
            <div className='mission-state'>
                <p>Founded in 2021, the DDD is the recognized and trusted expert in breed,
                     health, and training information for dogs. DDD actively advocates for 
                     responsible dog ownership.</p>
            </div>
            <div className='social-links'>
                <a href='/'>Github</a>
                <a href='/'>LinkedIn</a>
                <a href='/'>Personal</a>
            </div>
            <div className='copyright'>
                <p>copyright chuefeng vang</p>
            </div>
        </div>
    );
};

export default Footer;