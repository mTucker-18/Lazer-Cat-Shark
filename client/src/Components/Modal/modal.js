import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {

 render() {
   return (
     <div className="Modal">
       <button onClick={this.openModal}>Open Modal</button>
       <Modal
         isOpen={this.props.modalIsOpen}
         onRequestClose={this.closeModal}
         contentLabel="Example Modal"
       >
         <h2>Hello</h2>
         <div>I am a modal</div>
         <button onClick={this.closeModal}>close</button>
       </Modal>
     </div>
   );
 }
}

export default Modal;
