import React, {useEffect, useState} from 'react';
import './DogSearch.css';
import Axios from 'axios';
import Button from '@material-ui/core/Button'
import ModalWindow from './modal/Modal'
import Modal from '@material-ui/core/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';




function DogSearch(){

    const [dogList, setDogList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalDog, setModalDog] = useState("");

    function createModal(dog){
        setModalDog(dog);
        setModalIsOpen(true);
    }

    useEffect(()=>{
        Axios.get('http://localhost:5000/dogs')
        .then(res=>{
            setDogList(res.data);
        })
    }, [])

    return(
        <div className='dog-search-wrapper'>
            <div className='dog-search-header'>
                <div className='dog-search-header-title'>
                    <h1>Dog Breeds</h1>
                </div>
            </div>
        
            <div className='dog-results'>
                {dogList.map((dog)=>{
                    return (
                        <div key={dog.id} className='dog-cards' >
                            <div className='dog-cards-breed'>
                                {dog.breed}
                            </div>
                            <div className='dog-cards-inner'>
                                <div className='dog-cards-picture'>
                                    <img src={dog.pic} alt=''></img>
                                </div>
                                <div className='dog-cards-desc'>
                                    {dog.description}
                                </div>
                                <div className='dog-cards-button'>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        disableElevation 
                                        disableRipple 
                                        onClick={()=> createModal(dog)}>
                                            Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Modal
                open={modalIsOpen}
                onClose={()=>setModalIsOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalWindow 
                modalDog={modalDog}
                />
            </Modal>

            <div className='go-up'>
                <a href='#header'>
                    <FontAwesomeIcon icon={faAngleUp}/>
                </a>
            </div>

        </div>
    )
}

export default DogSearch;