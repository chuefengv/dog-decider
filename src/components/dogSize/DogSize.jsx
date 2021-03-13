import React from 'react';
import './DogSize.css'

function DogSize(){
    return(
        <div className='ds-wrapper'>
            <div className='s-dog'>
                Small Dog
            </div>
            <div className='m-dog'>
                Medium Dog
            </div>
            <div className='l-dog'>
                Large Dog
            </div>
        </div>
    );
};

export default DogSize;