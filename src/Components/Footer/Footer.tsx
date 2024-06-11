import classname from "./style.module.scss";
import { Link } from "react-router-dom";
import audiofile from "../../assets/Photos/HeaderPhoto/audiophile.svg";
import rentacle from "../../assets/Photos/FooterFoto/Rectangle.png";
import facebook from "../../assets/Photos/FooterFoto/facebook.svg";
import twitter from "../../assets/Photos/FooterFoto/instagram.svg";
import instagram from "../../assets/Photos/FooterFoto/twitter.svg";

const Footer = () => {
  return (
    <footer>
        <div className={classname["rentacle-img"]}>
          <img src={rentacle} alt="foto" />
        </div>
      <div className={classname["footer-container"]}>

        <div className={classname['head-bottom-cnt']}>

            <div className={classname['img-audiofile']}>
                <img src={audiofile} alt="audiofile" />
            </div>

            <div className={classname['footer-menu-cnt']}>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/products/headphones'}>HEADPHONES</Link></li>
                        <li><Link to={'/products/speakers'}>SPEAKERS</Link></li>
                        <li><Link to={'/products/earphones'}>EARPHONES</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

        
        <div className={classname['footer-text-cnt']}>

          <p>
            Audiophile is an all in one stop to 
            fulfill your audio needs. We're a small 
            team of music lovers and sound specialists 
            who are devoted to helping you get the most 
            out of personal audio. Come and visit our demo 
            facility - we’re open 7 days a week.
          </p>

          <div className={classname['text-icon-cnt']}>

            <div className={classname['span-text']}>
              <span>Copyright 2021. All Rights Reserved</span>
            </div>

            <div className={classname['icon-cnt']}>
              <Link to={'https://www.facebook.com'} target="_blanck"><img src={facebook} alt="facebook" /></Link>
              <Link to={'https://x.com'}><img src={twitter} alt="twitter" /></Link>
              <Link to={'https://www.instagram.com'}><img src={instagram} alt="instagram" /></Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
