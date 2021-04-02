import React from 'react';
import './DogSize.css';
import './clip.css';
import sdog_vector from '../../assets/s-dog.png';
import mdog_vector from '../../assets/m-dog.png';
import ldog_vector from '../../assets/l-dog.png';
import redbone from '../../assets/background.jpeg';
import bluebone from '../../assets/background_2.jpg';
import greenbone from '../../assets/background_3.jpeg';
import { Link } from 'react-router-dom';


function DogSize({setCheckedA, setCheckedB, setCheckedC}){
    
    //selects the correct size filters depending on which size the user selects
    function setSmall(){
        setCheckedA(true);
        setCheckedB(false);
        setCheckedC(false);
    }
    function setMedium(){
        setCheckedA(false);
        setCheckedB(true);
        setCheckedC(false);
    }
    function setLarge(){
        setCheckedA(false);
        setCheckedB(false);
        setCheckedC(true);
    }
    
    return(
        <div className='ds-wrapper'>
            <div className='dog-header' >
                <h1>Choose the right size for you!</h1>
                <p>The first step to being a responsible dog owner begins before you even bring home a dog. Thoughtfully and seriously assess your needs before making a decision, and you'll live long, happy lives together.</p>
            </div>
            <div className='small-dog'>

                <div className='dog'>
                    <h1>Small</h1>
                    <Link to='/show-dogs' onClick={()=>setSmall()}>
                        <div className='container'>
                            <div className='container-inner'>
                                <img src={sdog_vector} alt='' className='img img1'></img>
                                <img src={greenbone} alt='' className='circle'></img>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>
            <div className='medium-dog'>

                <div className='dog'>
                    <h1>Medium</h1>
                    <Link to='/show-dogs' onClick={()=>setMedium()}>
                        <div className='container'>
                            <div className='container-inner'>
                                <img src={mdog_vector} alt='' className='img img2'></img>    
                                <img src={bluebone} alt='' className='circle'></img>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
            <div className='large-dog'>

                <div className='dog'>
                        <h1>Large</h1>
                        <Link to='/show-dogs' onClick={()=>setLarge()}>
                            <div className='container'>
                                <div className='container-inner'>
                                    <img src={ldog_vector} alt='' className='img img3'></img>
                                    <img src={redbone} alt='' className='circle'></img>
                                </div>
                            </div>
                        </Link>
                    </div>

            </div>
        </div>
    );
};

export default DogSize;