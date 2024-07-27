import classname from "./style.module.scss";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../assets/Photos/Card/Card.svg";
import Audiofile from "../../assets/Photos/HeaderPhoto/audiophile.svg";
import burgicon from "../../assets/Photos/burgMenu/burgIcon.png";
import ProductSection from "../ProductsSection/ProductSection";
import Modal from 'react-modal';
import { CartContext, CartContextType } from "../../Context/Context";
import "./style.scss"
import CountInput from "../CountInput/CountInput";


const Header = () => {

  const {cart, updateCart, clearCart} = useContext(CartContext) as CartContextType;
  const navigate = useNavigate();
  
  const [menuList, setMenutList] = useState("none");
  const [modalIsOpen, setIsOpen] = useState(false);


  const handlBurgIcon = () => {
    setMenutList("burg-menu-list"); 
    if(menuList === "burg-menu-list"){
      setMenutList("none")
    } 
  };

  const handlMenuList = () => {
    setMenutList("none");
  };

  

  return (
    <>

        <div className={classname["burg-menu-container"]}>
          <div onClick={handlBurgIcon} className={classname[`burg-menu-icon`]}>
            <img src={burgicon} alt="burg-icon" />
          </div>



            <nav onClick={handlMenuList} className={classname[`${menuList}`]}>
              <div className="renderburg">
               <ProductSection />
              </div>
            </nav>
  
        </div>

    <header>
      <div className={classname["header-container"]}>
      
      


        <div className={classname["header-left-container"]}>
          
          <div className={classname.img}>
            <Link to={"/"}><img src={Audiofile} alt="Audiofile" /></Link>
            
          </div>
        </div>

        <div className={classname["header-centre-container"]}>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products/headphones"}>HEADPHONES</Link>
              </li>
              <li>
                <Link to={"/products/speakers"}>SPEAKERS</Link>
              </li>
              <li>
                <Link to={"/products/earphones"}>EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classname["header-right-container"]}>
          
          <div className={classname["card-img"]}>
            <img onClick={()=> setIsOpen(true)} src={Card} alt="Card" />

            <Modal
            className="header-modal-bg"
            onRequestClose={()=>setIsOpen(false)}
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={true}
            onAfterOpen={()=> document.body.style.overflow = "hidden"}
            onAfterClose={()=> document.body.style.overflow = "auto"}
          >

          </Modal>

          <Modal
            className="header-modal-content-cnt"
            onRequestClose={()=>setIsOpen(false)}
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={true}
            onAfterOpen={()=> document.body.style.overflow = "hidden"}
            onAfterClose={()=> document.body.style.overflow = "auto"}
          >
                
           <div className="head-info">
            <p className="cart">CART ({cart.length})</p>
            <p onClick={clearCart} className="remove">Remove All</p>
           </div>

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

                      <div className="item-rigth-cnt">
                            <CountInput
                              num={item.amount}
                              setNum={(num: number) => updateCart(num, item.product)}
                             />
                      </div>
                      
                    </div>
                  )
                })
                
              }

              <div className="head-total-cnt">
                <p className="head-total">
                  TOTAL
                </p>

                <p className="head-count">
                  $
                  {cart.reduce(
                    (sum, item) => sum + item.product.price * item.amount,
                    0)
                  }
                </p>


              </div>

              <div className="head-chekout-cnt">
                <button onClick={()=> {
                  setIsOpen(false);
                  navigate("/chekout")
                }}>chekout</button>
              </div>
           
            
          </Modal>

          </div>
        </div>
      </div>
    </header>

  </>
  );
};

export default Header;
