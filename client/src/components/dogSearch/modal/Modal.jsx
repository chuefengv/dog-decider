import React from 'react';
import './Modal.css';

function ModalWindow({modalBreed}){
    return(
        <div className='modal-wrapper'>
            <p>{modalBreed}</p>
        </div>
    )
};

export default ModalWindow;