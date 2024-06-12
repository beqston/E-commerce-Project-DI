import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsType } from "../Types/ProductsTypes";
import "../assets/style/pages.scss"

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

                
                <div key={prod.id}>
                    <h2>{prod.name}</h2>
                    <p>{prod.description}</p>
                    <div>{prod.category}</div>
                    <span>{prod.description}</span>
                    <p>{prod.features}</p>
                </div>
                </>
            )
            
        })}
        </>
    )
}

export default Products;