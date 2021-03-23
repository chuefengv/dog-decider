import React from 'react';
import DogSearch from '../DogSearch';
import './Modal.css';

function ModalWindow({modalDog}){

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className='modal-wrapper'>
            
            <div className='modal-header'>
                <div className='breed'>
                    {modalDog.breed}
                </div>
                {modalDog.size==='small' && <div className='size-small'>
                    {capitalizeFirstLetter(modalDog.size)}                    
                </div>}
                {modalDog.size==='medium' && <div className='size-medium'>
                    {capitalizeFirstLetter(modalDog.size)}                    
                </div>}
                {modalDog.size==='large' && <div className='size-large'>
                    {capitalizeFirstLetter(modalDog.size)}                    
                </div>}
            </div>

            <div className='modal-body'>
                <div className='pic'>
                    <img src={modalDog.pic} alt=''></img>
                </div>
                <div className='life'>
                    <p>Life Expectancy: {modalDog.life}</p>
                </div>
                <div className='weight'>
                    <p>Average Weight: {modalDog.weight}</p>                
                </div>
                <div className='height'>
                    <p>Average Height: {modalDog.height}</p>                   
                </div>
                    <h4>Bio</h4>
                <div className='bio'>
                    {modalDog.bio}
                </div>
            </div>
            
        </div>
    )
};

export default ModalWindow;