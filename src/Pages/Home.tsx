import MainBottom from "../Components/MainBottom/MainBottom";
import ProductSection from "../Components/ProductsSection/ProductSection";
import classname from "../assets/style/home.module.scss"
import ButtonChokolate from "../Components/button/ButtonChokolate";
import { Link } from "react-router-dom";
import speaker from "../../public/assets/home/desktop/image-speaker-zx9.png"
import ButtonGrey from "../Components/button/ButtonGrey";
import ButtonTransparent from "../Components/button/ButtonTransparent";
import earphonesDes from "../../public/assets/home/desktop/image-earphones-yx1.jpg"
import earphonesTab from "../../public/assets/home/tablet/image-earphones-yx1.jpg"
import earphonesMob from "../../public/assets/home/mobile/image-earphones-yx1.jpg"


const Home = ()=>  {

    return(
        <main style={{
            width:"100%"
        }} className={classname.home}>

            <section className={classname['home-head-container']}>
                
                    <div className={classname.img}>
                        <svg width="1110" height="1" viewBox="0 0 1110 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.2" width="1110" height="1" fill="white"/>
                        </svg>
                    </div>
                
                
                    <div className={classname['home-hero-cnt']}>

                        <div className={classname['hero-text-cnt']}>
                            <h3>NEW PRODUCT</h3>
                            <h2>
                            XX99 Mark II
                            Headphones
                            </h2>
                            <p>
                                Experience natural, lifelike audio and exceptional build quality made 
                                for the passionate music enthusiast.
                            </p>
                            <div className={classname['btn-chokolate']}>
                                <Link to={"/products/headphones/3"}><ButtonChokolate /></Link>
                            </div>                                                 
                            
                        </div>
    
                    </div>

            </section>

            <ProductSection />

            <section className={classname['speaker-main-cnt']}>

                <div className={classname['oval1']}></div>
                <div className={classname['oval2']}></div>
                <div className={classname['oval3']}></div>


                <div className={classname['speaker-left-cnt']}>

                    <div className={classname['speaker-img']}>
                        <img src={speaker} alt="photo" />
                    </div>

                </div>

                <div className={classname['speaker-rigth-cnt']}>
                    <h3>
                        ZX9
                        SPEAKER
                    </h3>

                    <p>
                        Upgrade to premium speakers that are phenomenally 
                        built to deliver truly remarkable sound.
                    </p>

                    <div>
                        <Link to={'/products/headphones/6'}><ButtonGrey /></Link>
                    </div>

                </div>

            </section>

            <section className={classname['speaker2-cnt']}>

               <div>
                    <h4>ZX7 SPEAKER</h4>
                    
                    <Link to={"/products/headphones/5"}><ButtonTransparent /></Link>
               </div>

            </section>

            <section className={classname['earphones']}>
                <div className={classname.img}>
                    
                <picture>
                    <img src={earphonesDes} alt="earphones"/>
                    <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={earphonesTab}/>
                    <source media="(max-width: 768px)" srcSet={earphonesMob}/>
                </picture>

                </div>

                <div className={classname['text-cnt']}>
                    <h4>YX1 EARPHONES</h4>
                    <Link to={"/products/headphones/1"}><ButtonTransparent /></Link>
                </div>
            </section>

            <MainBottom />
        </main>
    )
}

export default Home;