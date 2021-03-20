import React from 'react';
import './DogSize.css'

function DogSize(){
    return(
        <div className='ds-wrapper'>
            <div className='dog-header'>
                <h1>Choose the right size for you!</h1>
            </div>
            <div className='small-dog'>
                Small Dog
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