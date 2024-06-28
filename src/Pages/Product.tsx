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
                       
                       <section className={classname['top-section']}>
                       <div className={classname.picture}>
                            <picture>
                                <img src={`http://localhost:5173/${prod.categoryImage.desktop}`} alt="photo" />
                                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.categoryImage.tablet}`}/>
                                <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.categoryImage.mobile}`}/>
                            </picture>
                      </div>

                      <div className={classname['text-cnt']}>
                        <p className={classname["new"]}>{prod.new? <span>NEW PRODUCT</span>:""}</p>
                        <h3>{prod.name}</h3>
                        <p className={classname['description']}>{prod.description}</p>
                        <p className={classname['price']}><span>$ {prod.price}</span></p>

                        <div className={classname['count-addcard']}>
                            <CountInput />
                            <AddToCard />
                        </div>

                      </div>
                       </section>
            

                      <section className={classname['bottom-section']}>

                        <div className={classname['features-cnt']}>
                            <h4>FEATURES</h4>
                            <p>{prod.features}</p>
                        </div>


                        <div className={classname['box']}>
                            <h4>in the box</h4>

                          

                            <div className={classname['quantity-item-cnt']}>

                            <div className={classname['includes-cnt']}>
                                <>{prod.includes.map((item)=>{
                                    return(
                                        <div className={classname['quantity-item']}>
                                            <div className={classname['quantity']}>
                                                <span>{item.quantity}X</span>
                                            </div>
                                            <p>
                                                {item.item}
                                            </p>
                                        </div>
                                    )
                                })}</>
                            </div>


                            </div>
                            
                            

                        </div>
                      </section>

                    </section>
                )
            })}
            </>
        </main>
      
    )
}

export default Product;