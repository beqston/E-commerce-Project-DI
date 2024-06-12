import MainBottom from "../Components/MainBottom/MainBottom";
import ProductSection from "../Components/ProductsSection/ProductSection";
import classname from "../assets/style/home.module.scss"
import ButtonChokolate from "../Components/button/ButtonChokolate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsType } from "../Types/ProductsTypes";


const Home = ()=>  {
    
    const {productsName} = useParams()
    
    const [prods, setProds] = useState<null | ProductsType[]>(null)

    const getData = async ()=> {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        console.log(data)
        setProds(data)
    }

    useEffect(()=> {
        getData()
    }, [])
    return(
        <main className={classname.clas}>

            <section className={classname['home-head-container']}>
                <div style={{
                    paddingTop:'20px'
                }} className={classname.img}>
                    <svg width="1110" height="1" viewBox="0 0 1110 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.2" width="1110" height="1" fill="white"/>
                    </svg>
                </div>
                
                
                {prods?.splice(0,3).map((prod)=>{
                    
                    return(
                        <div key={prod.id} className={classname['home-head-cnt']}>
                        <div className={classname['head-left-cnt']}>
                            <h3>NEW PRODUCT</h3>
                            <h2>
                              {prod.name}
                            </h2>
                            <p>
                                Experience natural, lifelike audio and exceptional build quality made 
                                for the passionate music enthusiast.
                            </p>
                            <div className={classname['btn-chokolate']}>
                                <ButtonChokolate />
                            </div>
                            
                                                  
                            
                        </div>
    
                        <div className={classname['home-rigth-cnt']}>

                        </div>
                    </div>
                    )
                }).find(()=> productsName === productsName )}

            </section>

            <ProductSection />

            <MainBottom />
        </main>
    )
}

export default Home;