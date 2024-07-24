import "../assets/style/chekout.scss"
import { useContext, useState } from "react";
import Input, { PropsType } from "../Components/Input/Input";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import shapeImg from "../assets/Photos/Checkout/Shape.svg"
import { useForm } from "react-hook-form";
import { CartContext, CartContextType } from "../Context/Context";



type FormData = {
  name: string,
  email: string,
  adress: string,
  city: string,
  country: string,
  zipcode:  number,
  moneynumber: number,
  moneypin: number
}



const Checkout = ()=> {

  const {cart, updateCart} = useContext(CartContext) as CartContextType;


  const {register, handleSubmit, formState: {errors}}= useForm<FormData>();

  const OnSubmit =(data: PropsType)=> {
      console.log(data)
      console.log(register)
      console.log(handleSubmit)
  }


    const [modalIsOpen, setIsOpen] = useState(false);
    const navigator = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">("e-money");
    return (
        <div className="chekout-cnt">

          <p onClick={()=> {navigator(-1)}} className="chekout-back">
           Go Back
          </p>

          <form onSubmit={handleSubmit(OnSubmit)}>

          <main className="chekout-main-cnt">

            <h2 className="h2-heading">CHECKOUT</h2>

            <section className="billing-section">

              <h5 className="title">Billing Details</h5>

              <div className="section1-cnt">

                <Input
                  title="Name"
                  type="text"
                  placeholder="Alexei Ward"
                  id="name"
                  {...register("name", {
                    required:{
                      value:true,
                      message: "Not Correct"
                    }
                  })}
                  isError={Boolean(errors.name)}
                />

                <Input
                  title="Email Address"
                  type="email"
                  placeholder="alexei@mail.com"
                  id="adress"

                  {...register("email", {
                    required:true,
                    pattern: {
                      value:
                        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
                      message: "Please enter valid email",
                    },
                  })}
                  isError={Boolean(errors.email)}
                />


              </div>
              
            </section>

            <section className="shiping-section">

              <h5 className="title">shipping info</h5>

              <div className="section2-cnt">

              <Input
                title="Address"
                type="text"
                placeholder="1137 Williams Avenue"
                id="address"

                {...register("adress", {
                  required:{
                    value:true,
                    message: "Not Correct"
                  }
                })}
                isError={Boolean(errors.adress)}
              />

              <div className="section2-inputs3">
                <Input
                  title="ZIP Code"
                  type="number"
                  placeholder="10001"
                  id="zip"

                  {...register("zipcode", {
                    required:{
                      value:true,
                      message: "Not Correct"
                    }
                  })}
                  isError={Boolean(errors.zipcode)}
                />
                
                <Input
                  title="City"
                  type="text"
                  placeholder="New York"
                  id="city"

                  {...register("city", {
                    required:{
                      value:true,
                      message: "Not Correct"
                    }
                  })}
                  isError={Boolean(errors.city)}
                />

                <Input
                  title="Country"
                  type="text"
                  placeholder="United States"
                  id="country"

                  {...register("country", {
                    required:{
                      value:true,
                      message: "Not Correct"
                    }
                  })}
                  isError={Boolean(errors.country)}
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
                title="e-Money Number"
                type="number"
                placeholder="238521993"
                id="e-money-number"

                {...register("moneynumber", {
                  required:{
                    value:true,
                    message: "Not Correct"
                  }
                })}
                isError={Boolean(errors.moneynumber)}

     
              />

              <Input
                title="e-Money PIN"
                type="number"
                placeholder="7891"
                id="e-money-pin"

                {...register("moneypin", {
                  required:{
                    value:true,
                    message: "Not Correct"
                  }
                })}
                isError={Boolean(errors.moneypin)}               
              />

            </div>: null
            }

            </section>

          </main>
                
              <aside>

                <h2>Summary</h2>

                <button type="submit">subm</button>

                
                 <h4>
                  product list
                 </h4>

                 <div>
                  {
                    cart.map((item)=> {
                      console.log(item)
                      return(
                        <div>
                          <h3>{item.product.name}</h3>
                          <p>{item.amount}</p>
                        </div>
                      )
                    })
                  }
                 </div>


                <div>
              
            </div>
              </aside>


        </form> 
             

          {/* <button className="sss" onClick={()=> {setIsOpen(true)}}>Open Modal</button> */}

          <Modal
            onRequestClose={()=>setIsOpen(false)}
            shouldCloseOnEsc={true}
            isOpen={modalIsOpen}
            onAfterOpen={()=> document.body.style.overflow === "hidden"}
            onAfterClose={()=> document.body.style.overflow === "auto"}
          >

            
          </Modal>

        </div>
        
      );
}

export default Checkout;
