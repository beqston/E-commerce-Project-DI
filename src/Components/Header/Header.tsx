import classname from "./style.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../assets/Photos/Card/Card.svg";
import Audiofile from "../../assets/Photos/HeaderPhoto/audiophile.svg";
import burgicon from "../../assets/Photos/burgMenu/burgIcon.png";

const Header = () => {
  const [burgIcon, setBurgIcon] = useState("burg-menu-icon");
  const [menuList, setMenutList] = useState("none");

  const HandlHeader = ()=> {
    if(menuList === 'none'){
      setMenutList('burg-menu-list')
      setBurgIcon("none")
    } else{
      setMenutList('none')
      setBurgIcon("burg-menu-icon")
    }
    
  }

  const handlBurgIcon = () => {
    setBurgIcon("none");
    setMenutList("burg-menu-list");
  };

  const handlMenuList = () => {
    setBurgIcon("burg-menu-icon");
    setMenutList("none");
  };
  return (
    <header onClick={HandlHeader}>
      <div className={classname["header-container"]}>
      
      
        <div className={classname["burg-menu-container"]}>
          <div onClick={handlBurgIcon} className={classname[`${burgIcon}`]}>
            <img src={burgicon} alt="burg-icon" />
          </div>

          <nav onClick={handlMenuList} className={classname[`${menuList}`]}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>HEADPHONES</Link>
              </li>
              <li>
                <Link to={"/"}>SPEAKERS</Link>
              </li>
              <li>
                <Link to={"/"}>EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>

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
                <Link to={"/headphones"}>HEADPHONES</Link>
              </li>
              <li>
                <Link to={"/speakers"}>SPEAKERS</Link>
              </li>
              <li>
                <Link to={"/earphones"}>EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classname["header-right-container"]}>
          <div className={classname["card-img"]}>
            <img src={Card} alt="Card" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
