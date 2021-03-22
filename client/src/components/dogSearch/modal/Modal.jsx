import React from 'react';
import Modal from 'react-modal';
import './Modal.css'

function ModalWindow({modalIsOpen, setModalIsOpen}){
    return(
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(!modalIsOpen)}>
                <h1>hello</h1>
                <button onClick={()=>setModalIsOpen(!modalIsOpen)} >CLICK ME</button>
            </Modal>
        </div>
    )
};

export default ModalWindow;