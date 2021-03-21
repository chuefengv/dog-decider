import React, {useEffect, useState} from 'react';
import './DogSearch.css';
import Axios from 'axios';

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

    console.log(dogList)

    return(
        <div className='dog-search-wrapper'>
            {dogList.map((dog)=>{
                return <div key={dog.id}> {dog.breed}</div>
            })}
        </div>
    )
}

export default DogSearch;