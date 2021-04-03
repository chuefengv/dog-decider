import React from 'react';
import './Modal.css';

function ModalWindow({modalDog}){

    //database schema has size listed in lowercases, capitalizing to make display look cleaner
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
                    <h4>Life Expectancy:</h4> <p>{modalDog.life}</p>
                </div>
                <div className='bio'>
                    {modalDog.bio}
                </div>
                <div className='weight'>
                <h4>Average Weight:</h4> <p>{modalDog.weight}</p>               
                </div>
                <div className='height'>
                <h4>Average Height:</h4> <p>{modalDog.height}</p>                  
                </div>
            </div>

        </div>
    )
};

export default ModalWindow;