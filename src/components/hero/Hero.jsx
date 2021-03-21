import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Hero(){
    return(
        <div className='hero'>
            <div className='hero-wrapper'>
                <h1>Looking for the right dog for you?</h1>
                <p>Dogs come in all sorts of breeds and sizes, so take the time to choose the one that matches you! </p>
                <p>Scroll down to start your search!</p>
                <a href='#dogsize'>
                    <FontAwesomeIcon 
                        className='chevron-down'
                        icon={faChevronDown}
                    />
                </a>
            </div>
        </div>

    );
};

export default Hero;