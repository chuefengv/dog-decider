import React from 'react';
import './Footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import home from '../../assets/home.png'


function Footer(){
    return(
        <div className='footer-wrapper'>
            <div className='mission-state'>
                <p>Founded in 2021, the DDC is the recognized and trusted expert in breed,
                     health, and training information for dogs. DDD actively advocates for 
                     responsible dog ownership.</p>
            </div>
            <div className='social-links'>
                <a href='https://github.com/chuefengv/dog-decider'>
                    <img src={github} alt=''></img>
                </a>
                <a href='https://www.linkedin.com/in/chuefeng-vang-3ab565161/'>
                    <img src={linkedin} alt=''></img>
                </a>
                <a href='/'>
                    <img src={home} alt=''></img>
                </a>
            </div>
            <div className='copyright'>
                <p>© Dog Data Cards, Inc. 2021. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;