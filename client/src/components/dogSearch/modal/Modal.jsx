import React from 'react';
import DogSearch from '../DogSearch';
import './Modal.css';

function ModalWindow({modalDog}){
    return(
        <div className='modal-wrapper'>

            <div className='modal-header'>
                <div className='breed'>
                    {modalDog.breed}
                </div>
                <div className='size'>
                    {modalDog.size}
                </div>
            </div>

            <div className='modal-body'>
                <div className='pic'>
                    <img src={modalDog.pic} alt=''></img>
                </div>
                <div className='life'>
                    {modalDog.life}
                </div>
                <div className='desc'>
                    {modalDog.description}
                </div>
                <div className='weight'>
                    {modalDog.weight}
                </div>
                <div className='height'>
                    {modalDog.height}
                </div>
                <div className='bio'>
                    {modalDog.bio}
                </div>
            </div>
        </div>
    )
};

export default ModalWindow;