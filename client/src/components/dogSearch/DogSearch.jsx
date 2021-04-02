import React, {useEffect, useState} from 'react';
import './DogSearch.css';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import ModalWindow from './modal/Modal';
import Ordering from './ordering/Ordering';
import Modal from '@material-ui/core/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


function DogSearch({checkedA, checkedB, checkedC, setCheckedA, setCheckedB, setCheckedC}){

    const [dogList, setDogList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalDog, setModalDog] = useState("");

    function createModal(dog){
        setModalDog(dog);
        setModalIsOpen(true);
    }

    //everytime the user checks off a new size filter, update the page to show breeds accordingly
    useEffect(()=>{
        Axios.get('/api/data', {params: {small:(checkedA ? "" : "small"), medium:(checkedB ? "" : "medium"), large:(checkedC ? "" : "large")}})
        .then(res=>{
            setDogList(res.data);
        })
    }, [checkedA, checkedB, checkedC])

    return(
        <div className='dog-search-wrapper'>

            <div className='dog-search-header'>
                <div className='dog-search-header-title'>
                    <h1>Dog Breeds</h1>
                </div>
            </div>

            {/* filter option to show either small, medium or large breeds */}
            <div className='dog-search-order'>
                <div className='dog-search-order-sizes'>
                    <Ordering checkedA={checkedA} checkedB={checkedB} checkedC={checkedC} 
                    setCheckedA={setCheckedA} setCheckedB={setCheckedB} setCheckedC={setCheckedC} fontSize={18}/>
                </div>
            </div>
            
            {/* for every dog in the database, create a general info card with a 'learn more' option */}
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

            {/* when all dog sizes are unchecked, ask the user to choose a size */}
            <div className='no-choice'>
                   {checkedA===false && checkedB===false && checkedC===false && <h1>Please choose a size.</h1>}
            </div>  
            
            {/* when a dog info is clicked, modal window with more information about specific dog breed is shown */}
            <Modal
                open={modalIsOpen}
                onClose={()=>setModalIsOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalWindow modalDog={modalDog}/>
            </Modal>

            {/* scrolls to the top of the page quickly */}
            <div className='go-up'>
                <a href='#header'>
                    <FontAwesomeIcon icon={faAngleUp}/>
                </a>
            </div>

        </div>
    )
}

export default DogSearch;