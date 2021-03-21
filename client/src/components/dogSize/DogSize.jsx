import React from 'react';
import './DogSize.css'
import './clip.css'
import sdog_vector from '../../assets/s-dog.png'
import mdog_vector from '../../assets/m-dog.png'
import ldog_vector from '../../assets/l-dog.png'
import redbone from '../../assets/background.jpeg'
import bluebone from '../../assets/background_2.jpg'
import greenbone from '../../assets/background_3.jpeg'


function DogSize(){
    return(
        <div className='ds-wrapper'>
            <div className='dog-header'>
                <h1>Choose the right size for you!</h1>
                <p>The first step to being a responsible dog owner begins before you even bring home a dog. Thoughtfully and seriously assess your needs before making a decision, and you'll live long, happy lives together.</p>
            </div>
            <div className='small-dog'>

                <div className='dog'>
                    <h1>Small</h1>
                    <a href='/show-dogs'>
                        <div className='container'>
                            <div className='container-inner'>
                                <img src={sdog_vector} alt='' className='img img1'></img>
                                <img src={greenbone} alt='' className='circle'></img>
                            </div>
                        </div>
                    </a>
                </div>


            </div>
            <div className='medium-dog'>

                <div className='dog'>
                    <h1>Medium</h1>
                    <a href='/show-dogs'>
                        <div className='container'>
                            <div className='container-inner'>
                                <img src={mdog_vector} alt='' className='img img2'></img>    
                                <img src={bluebone} alt='' className='circle'></img>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <div className='large-dog'>

                <div className='dog'>
                        <h1>Large</h1>
                        <a href='/show-dogs'>
                            <div className='container'>
                                <div className='container-inner'>
                                    <img src={ldog_vector} alt='' className='img img3'></img>
                                    <img src={redbone} alt='' className='circle'></img>
                                </div>
                            </div>
                        </a>
                    </div>

            </div>
        </div>
    );
};

export default DogSize;