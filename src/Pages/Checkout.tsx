import "../assets/style/chekout.scss"
import { useContext, useState } from "react";
import Input from "../Components/Input/Input";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../Context/Context";
import shapeImg from "../assets/Photos/Checkout/Shape.svg"



const Checkout = ()=> {
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigator = useNavigate();
    const {prodArray, setProdArray} = useContext(Cartcontext);

    const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">("e-money");
    return (
        <div className="chekout-cnt">

          <p onClick={()=> {navigator(-1)}} className="chekout-back">
           Go Back
          </p>

        <main className="chekout-main-cnt">

          <h2 className="h2-heading">CHECKOUT</h2>

          <section className="billing-section">

            <h5 className="title">Billing Details</h5>

            <div className="section1-cnt">

              <Input
                name="Name"
                type="text"
                placeholder="Alexei Ward"
                id="name"
              />

              <Input
                name="Email Address"
                type="email"
                placeholder="alexei@mail.com"
                id="adress"
              />

           

            </div>
            
          </section>

          <section className="shiping-section">

            <h5 className="title">shipping info</h5>

            <div className="section2-cnt">

            <Input
              name="Address"
              type="text"
              placeholder="1137 Williams Avenue"
              id="address"
            />

            <div className="section2-inputs3">
              <Input
                name="ZIP Code"
                type="number"
                placeholder="10001"
                id="zip"
              />
              
              <Input
                name="City"
                type="text"
                placeholder="New York"
                id="city"
              />

              <Input
                name="Country"
                type="text"
                placeholder="United States"
                id="country"
              />
            </div>

            </div>

          </section>

          <section className="payment-method-cnt">

            <h5 className="title">payment details</h5>

            <div className="section3-cnt">
              <p>Payment Method</p>

              <div className="payment-input-cnt">
              <Input
                name="payment-method"
                type="radio"
                id="cash"
                radioName="e-Money"
                checked={paymentMethod === "e-money"}
                onChange={()=> setPaymentMethod("e-money")}
              />

              <Input
                name="payment-method"
                type="radio"
                id="pay"
                radioName="Cash on Delivery"
                checked={paymentMethod === "cash"}
                onChange={()=> setPaymentMethod("cash")}
              />
              </div>
      
            </div>

          </section>

          <section className="checkout-bottom-cnt">

          {paymentMethod === "cash"? 
          <div className="chekout-bottom-text-cnt">
          
          <div className="checkout-botom-left">
                <img src={shapeImg} alt="Image" />
              </div>

              <div className="checkout-botom-rigth">
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. 
                  Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>
              </div>: null}

           {
            paymentMethod === "e-money"?    <div className="chekout-bottom-input-cnt">

            <Input
              name="e-Money Number"
              type="number"
              placeholder="238521993"
              id="e-money-number"
            />

            <Input
              name="e-Money PIN"
              type="number"
              placeholder="7891"
              id="e-money-pin"
            />

          </div>: null
           }



          </section>

          


        </main>

        <aside>

        </aside>

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



        </div>
      );
}

export default Checkout;
