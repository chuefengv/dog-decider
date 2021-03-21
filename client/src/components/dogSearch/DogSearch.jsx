import React, {useEffect, useState} from 'react';
import './DogSearch.css';
import Axios from 'axios';
import ClampLines from 'react-clamp-lines';

function DogSearch(){

    const [dogList, setDogList] = useState([]);

    // function getinfo(){
    //     Axios.get('http://localhost:5000/dogs')
    //     .then(res=>{
    //         setDogList(res);
    //         console.log(dogList.data);
    //     })
    // }
    
    useEffect(()=>{
        Axios.get('http://localhost:5000/dogs')
        .then(res=>{
            setDogList(res.data);
        })
    }, [])

    return(
        <div className='dog-search-wrapper'>

            <div className='dog-results'>
                {dogList.map((dog)=>{
                    return (
                    <div key={dog.id} className='dog-cards'>
                        <div className='dog-cards-breed'>
                            {dog.breed}
                        </div>
                        <div className='dog-cards-picture'>
                            <img src={dog.pic}></img>
                        </div>
                        <ClampLines text={dog.description} lines={4} className='dog-cards-desc'/>
                        
                    </div>
                    
                    )
                })}
            </div>


        </div>
    )
}

export default DogSearch;