import React from 'react';
import './DogSize.css'
import sdog_vector from '../../assets/s-dog.png'

function DogSize(){
    return(
        <div className='ds-wrapper'>
            <div className='dog-header'>
                <h1>Choose the right size for you!</h1>
            </div>
            <div className='small-dog'>
                <div className='circle'>
                    <img src={sdog_vector} alt=''></img>
                </div>
            </div>
            <div className='medium-dog'>
                Medium Dog
            </div>
            <div className='large-dog'>
                Large Dog
            </div>
        </div>
    );
};

export default DogSize;