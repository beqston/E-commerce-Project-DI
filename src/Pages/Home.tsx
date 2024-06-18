import MainBottom from "../Components/MainBottom/MainBottom";
import ProductSection from "../Components/ProductsSection/ProductSection";
import classname from "../assets/style/home.module.scss"
import ButtonChokolate from "../Components/button/ButtonChokolate";
import { Link } from "react-router-dom";

import speaker from "../../public/assets/home/desktop/image-speaker-zx9.png"
import ButtonGrey from "../Components/button/ButtonGrey";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { ProductsType } from "../Types/ProductsTypes";


const Home = ()=>  {
    
    // const {productsName} = useParams()
    
    // const [prods, setProds] = useState<null | ProductsType[]>(null)

    // const getData = async ()=> {
    //     const res = await fetch('http://localhost:3000/products')
    //     const data = await res.json()
    //     console.log(data)
    //     setProds(data)
    // }

    // useEffect(()=> {
    //     getData()
    // }, [])

    return(
        <main className={classname.home}>

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

            <MainBottom />
        </main>
    )
}

export default Home;