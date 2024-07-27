import "../assets/style/chekout.scss"
import { useContext, useState } from "react";
import Input from "../Components/Input/Input";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import shapeImg from "../assets/Photos/Checkout/Shape.svg"
import { useForm } from "react-hook-form";
import { CartContext, CartContextType } from "../Context/Context";
import succses from "../assets/Photos/Checkout/succses.svg"



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

  const {cart, clearCart} = useContext(CartContext) as CartContextType;

  const {register, handleSubmit, formState: {errors}}= useForm<FormData>();

  const OnSubmit =()=> {
    if(cart.length === 0){
      setIsOpen(false)
      return
    }
      if(!errors.name){
        setIsOpen(true)
      }else{
        setIsOpen(false)
      }
  }

    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">("e-money");
    return (
        <div className="chekout-cnt">

          <p onClick={()=> {navigate(-1)}} className="chekout-back">
           Go Back
          </p>

          <form className="chekout-form"  onSubmit={handleSubmit(OnSubmit)}>

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
              paymentMethod === "e-money"? <div className="chekout-bottom-input-cnt">

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
                
              <aside className="chekout-aside">

                <h2>Summary</h2>

                 {
                  
                  cart.map((item)=> {
  
                    return(
                      <div className="item-cnt">
  
                        <div className="item-left-cnt">
                          <img
                            src={`http://localhost:5173/${item.product?.categoryImage.desktop}`}
                            alt="photo"
                          />
                          <div className="price-cnt">
                            <h4>{item.product.name.split(" ").slice(0, -1).join(" ")}</h4>
                            <p className="price">${item.product.price}</p>
                          </div>
  
                        </div>
                    
                        <p className="amaunt">
                            x{item.amount}
                        </p>
                        
                      </div>
                    )
                  })
                  
                }
  
                <div className="chekout-total-cnt">

                  <p className="chekout-total">
                    TOTAL
                  </p>
  
                  <p className="total-cash">
                    $
                    {cart.reduce(
                      (sum, item) => sum + item.product.price * item.amount,
                      0)
                    }
                  </p>

                 </div>


                <div>

                  <div className="text-price-cnt">
                    <p className="text">
                      SHIPPING
                    </p>

                    <p className="price">
                      $50
                    </p>

                  </div>

                  
                  <div className="text-price-cnt">
                    <p className="text">
                    VAT (INCLUDED)
                    </p>

                    <p className="price">
                      $
                    {
                      Math.floor((cart.reduce(
                        (sum, item) => sum + item.product.price * item.amount,
                        0) ) * 0.2)
                    }
                    </p>

                  </div>

                  <div className="grand-total">

                    <p className="text">
                      GRAND TOTAL
                    </p>

                    <p className="all-price">
                      $
                      {
                        (cart.reduce(
                          (sum, item) => sum + item.product.price * item.amount,
                          0)) + 50 + Math.floor((cart.reduce(
                            (sum, item) => sum + item.product.price * item.amount,
                            0) ) * 0.2)
                      }
                    </p>
                    
                  </div>

                  <div className="succses-btn">
                    <button onClick={()=>  setIsOpen(true)}>CONTINUE & PAY</button>
                  </div>


              
            </div>
              </aside>


        </form> 
        <Modal
            className="succses-bg-modal"
            onRequestClose={()=>setIsOpen(false)}
            shouldCloseOnEsc={true}
            isOpen={modalIsOpen}
            onAfterOpen={()=> document.body.style.overflow === "hidden"}
            onAfterClose={()=> document.body.style.overflow === "auto"}
          >           
          </Modal>
             
          <Modal
            className="succses-modal"
            onRequestClose={()=>setIsOpen(false)}
            shouldCloseOnEsc={true}
            isOpen={modalIsOpen}
            onAfterOpen={()=> document.body.style.overflow === "hidden"}
            onAfterClose={()=> document.body.style.overflow === "auto"}
          >

            <div className="succses-img">
              <img src={succses} alt="succses" />
            </div>

            <h2 className="succses-title">
              THANK YOU <br />
              FOR YOUR ORDER
            </h2>

            <p className="succses-p">
              You will receive an email confirmation shortly.
            </p>

            <div className="succses-items-cnt">

              <div className="succses-item-left">

                {
                  cart.map((item)=> {
                    return(
                      <div className="succses-item">
                      <img
                        src={`http://localhost:5173/${item.product?.categoryImage.desktop}`}
                        alt="photo"
                      />
                      <div className="succses-price-cnt">
                        <h4>{item.product.name.split(" ").slice(0, -1).join(" ")}</h4>
                        <p className="price">${item.product.price}</p>
                      </div>
                      <p className="succses-amount">
                        x
                        {item.amount}
                      </p>
                    </div>
                    )
                  })
                }

                <hr className="succses-hr" />

                <p className="view-less">
                  View less
                </p>

              </div>

                
            <div className="succses-item-rigth">
              <p className="succses-grand-total">
                GRAND TOTAL
              </p>

              <p className="grand-succses-price">
                $
                {
                  (cart.reduce(
                    (sum, item) => sum + item.product.price * item.amount,
                    0)) + 50 + Math.floor((cart.reduce(
                    (sum, item) => sum + item.product.price * item.amount,
                    0) ) * 0.2)
                }
              </p>
            </div>

            </div>

              <div className="finish-btn">
                  <button  onClick={()=>{
                    navigate("/")
                    clearCart()     
                  }}>
                    BACK TO HOME
                  </button>
              </div>
            
          </Modal>



        </div>
        
      );
}

export default Checkout;
