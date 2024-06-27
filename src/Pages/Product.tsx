import classname from "../assets/style/item.module.scss"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsType } from "../Types/ProductsTypes";
import CountInput from "../Components/CountInput/CountInput";
import AddToCard from "../Components/AddToCard/AddToCard";

interface ProdID{
    id: number | string | undefined
}

const Product = ()=> {
    const navigate = useNavigate()
    const {productID} = useParams()
    console.log(productID)
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
        <main className={classname['main-item-cnt']}>
            <p className={classname['back']} onClick={()=> {navigate(-1)}}>Go Back</p>
            
            <>
            
            {prods?.filter((prod: ProdID)=> prod.id === productID).map((prod)=> {
                return(
                    <section key={prod.id} className={classname['item-cnt']}>
                       
                       <div className={classname.picture}>
                            <picture>
                                <img src={`http://localhost:5173/${prod.categoryImage.desktop}`} alt="photo" />
                                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.categoryImage.tablet}`}/>
                                <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.categoryImage.mobile}`}/>
                            </picture>
                      </div>

                      <div className={classname['text-cnt']}>
                        <h2>{prod.name}</h2>
                        <p>{prod.description}</p>
                        <p><span>$ {prod.price}</span></p>

                      </div>

                    </section>
                )
            })}
            </>

            <CountInput />
            <AddToCard />
        </main>
      
    )
}

export default Product;