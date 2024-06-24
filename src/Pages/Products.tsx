import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsType } from "../Types/ProductsTypes";
import "../assets/style/pages.scss"
import classname from "../assets/style/pages.module.scss"
import ButtonChokolate from "../Components/button/ButtonChokolate";

const Products = ()=> {

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
        
        <>

        {prods?.filter((prod)=> prod.category === productsName).map((prod)=>{
            return(
                <>
            <section className="head-category-section">
                <div className="img">
                    <svg width="1110" height="1" viewBox="0 0 1110 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.2" width="1110" height="1" fill="white"/>
                    </svg>
                </div>
                <h2>{prod.category}</h2>
            </section>

                </>
            )
            
        }).find(()=> productsName === productsName)} 

        {/* //main context */}
    
        
        {prods?.filter((prod)=> prod.category === productsName).map((prod)=>{
            return(
                <>

                <section className={classname['products']} key={prod.id}>
                  
                 <article>
                  
                  <div className={classname['products-img']}>

                    <picture>
                        <img src={`http://localhost:5173/${prod.categoryImage.desktop}`} alt="photo" />
                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.categoryImage.tablet}`}/>
                        <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.categoryImage.mobile}`}/>
                    </picture>

                    <div className={classname['text-cnt']}>
                        <span>{prod.new?'new product': '' }</span>
                        <p>{prod.description}</p>
                        <Link to={`http://localhost:5173/products/${prod.category}/${prod.id}`}><ButtonChokolate /></Link>
                  </div>


                  </div>

                
                        
                   </article>

                </section>
                
                </>
            )
            
        })}
        </>
    )
}

export default Products;