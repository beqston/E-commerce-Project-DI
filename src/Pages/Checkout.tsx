import { useState } from "react";
import Input from "../Components/Input/Input";
import Modal from 'react-modal';



const Checkout = ()=> {
    const [modalIsOpen, setIsOpen] = useState(false);
    return (
        <div>
          <button onClick={()=> {setIsOpen(true)}}>Open Modal</button>
          <Modal
            onRequestClose={()=>setIsOpen(false)}
            shouldCloseOnEsc={true}
            isOpen={modalIsOpen}
            onAfterOpen={()=> document.body.style.overflow === "hidden"}
            onAfterClose={()=> document.body.style.overflow === "auto"}
          >

            <button onClick={()=> {setIsOpen(false)}}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>npx
          </Modal>

          <Input
          name="Name"
          type="text"
          id="text"
          placeholder="Enter Name"

          />


        </div>
      );
}

export default Checkout;
