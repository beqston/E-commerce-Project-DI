import classname from "./style.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../assets/Photos/Card/Card.svg";
import Audiofile from "../../assets/Photos/HeaderPhoto/audiophile.svg";
import burgicon from "../../assets/Photos/burgMenu/burgIcon.png";
import ProductSection from "../ProductsSection/ProductSection";

import Modal from 'react-modal';

const Header = () => {
  
  const [menuList, setMenutList] = useState("none");

  const [modalIsOpen, setIsOpen] = useState(false);

  const handlBurgIcon = () => {
    setMenutList("burg-menu-list");
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

          <nav style={{
            minWidth: "144%",
            height: "800px",
            position: "absolute",
            top:"100px",
            zIndex:"20",
            backgroundColor: "white"
          }} onClick={handlMenuList} className={classname[`${menuList}`]}>
            <ProductSection />
          </nav>
        </div>
    <header>
      <div className={classname["header-container"]}>
      
      


        <div className={classname["header-left-container"]}>
          
          <div className={classname.img}>
            <img src={Audiofile} alt="Audiofile" />
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
            onRequestClose={()=>setIsOpen(false)}
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={true}
            onAfterOpen={()=> document.body.style.overflow = "hidden"}
            onAfterClose={()=> document.body.style.overflow = "auto"}
          >

            {/* <button onClick={()=> {setIsOpen(false)}}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>npx */}
            
          </Modal>

          </div>
        </div>
      </div>
    </header>

  </>
  );
};

export default Header;
