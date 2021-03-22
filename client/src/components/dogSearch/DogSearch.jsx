import React, {useEffect, useState} from 'react';
import './DogSearch.css';
import Axios from 'axios';
import Button from '@material-ui/core/Button'
import ModalWindow from './modal/Modal'

function DogSearch(){

    const [dogList, setDogList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:5000/dogs')
        .then(res=>{
            setDogList(res.data);
        })
    }, [])


    return(
        <div className='dog-search-wrapper'>
            <div className='dog-results'>
                {modalIsOpen && <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
                {dogList.map((dog)=>{
                    return (
                        <div key={dog.id} className='dog-cards' >
                            <div className='dog-cards-breed'>
                                {dog.breed}
                            </div>
                            <div className='dog-cards-inner'>
                                <div className='dog-cards-picture'>
                                    <img src={dog.pic}></img>
                                </div>
                                <div className='dog-cards-desc'>
                                    {dog.description}
                                </div>
                                <div className='dog-cards-button'>
                                    <Button variant="contained" color="primary" disableElevation disableRipple onClick={()=>setModalIsOpen(!modalIsOpen)}>
                                            Read More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default DogSearch;