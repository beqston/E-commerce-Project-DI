import { useState } from "react";
import Input from "../Components/Input/Input";

import Modal from 'react-modal';



const Checkout = ()=> {
    const [modalIsOpen, setIsOpen] = useState(false);
    return (
        <div>
          <button onClick={()=> {setIsOpen(true)}}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
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
        </div>
      );
}

export default Checkout;
