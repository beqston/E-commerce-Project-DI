import classname from "../assets/style/item.module.scss"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductsType } from "../Types/ProductsTypes";
import CountInput from "../Components/CountInput/CountInput";
import AddToCard from "../Components/AddToCard/AddToCard";
import ButtonChokolate from "../Components/button/ButtonChokolate";
import ProductSection from "../Components/ProductsSection/ProductSection";
import MainBottom from "../Components/MainBottom/MainBottom";
import { CartContext, CartContextType } from "../Context/Context";

interface ProdID{
    id: number | string | undefined
}

const Product = ()=> {
    const navigate = useNavigate()
    const {productID} = useParams()
    const [prods, setProds] = useState<null | ProductsType[]>(null)
    const {cart, updateCart} = useContext(CartContext) as CartContextType;

    const [num, setNum] = useState(()=>{
        const item = cart.find((item)=> item.product.id === productID);
        if(item){
            return item.amount;
        }return 1;
    })


    const getData = async ()=> {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setProds(data)
    }

    useEffect(()=> {
        getData()
    }, []);
    

    return(
        <>
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
                        {prod.new? <p className={classname["new"]}><span>NEW PRODUCT</span></p>: null}
                        <h3>{prod.name}</h3>
                        <p className={classname['description']}>{prod.description}</p>
                        <p className={classname['price']}><span>$ {prod.price}</span></p>

                        <div className={classname['count-addcard']}>
                            <CountInput
                             num={num} 
                             setNum={setNum} 
                             />

                            {                          
                                prod && (<AddToCard onClick={()=> {
                                    updateCart(num, prod);
                                    console.log(prod);
                                    console.log(num)
                                }} />)
                            }
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

            <div className={classname['item-img-cnt']}>
                {prods?.filter((prod: ProdID)=> prod.id === productID).map((prod)=> {
                    return(
                        <div className={classname['gallery-img']}>

                            <div className={classname['firs-second-cnt']}>

                                <div className={classname['first-img']}>
                                    <picture>
                                        <img src={`http://localhost:5173/${prod.gallery.first.desktop}`} alt="photo" />
                                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.gallery.first.tablet}`}/>
                                        <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.gallery.first.mobile}`}/>
                                    </picture> 
                                </div>

                                <div className={classname['second-img']}>
                                    <picture>
                                        <img src={`http://localhost:5173/${prod.gallery.second.desktop}`} alt="photo" />
                                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.gallery.second.tablet}`}/>
                                        <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.gallery.second.mobile}`}/>
                                    </picture> 
                                </div>

                            </div>

                            

                            <div className={classname['third-img']}>
                                <picture>
                                    <img src={`http://localhost:5173/${prod.gallery.third.desktop}`} alt="photo" />
                                    <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.gallery.third.tablet}`}/>
                                    <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.gallery.third.mobile}`}/>
                                </picture> 
                            </div>
                        </div>
                    )
                })}
            </div>

            <section className={classname['others-products-cnt']}>
                <h4>you may also like</h4>

                {prods?.filter((prod: ProdID)=> prod.id === productID).map((prod)=> {
                    return(
                        <div className={classname['others-product-cnt']}>

                            {prod.others.map((prod)=> {
                                return(
                                    <div className={classname['others-product']}>

                                        <div className={classname['item-img']}>
                                            <picture>
                                                <img src={`http://localhost:5173/${prod.image.desktop}`} alt="photo" />
                                                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`http://localhost:5173/${prod.image.tablet}`}/>
                                                <source media="(max-width: 768px)" srcSet={`http://localhost:5173/${prod.image.mobile}`}/>
                                            </picture> 
                                        </div>

                                        <h3>{prod.name}</h3>

                                        <Link to={`/products/${prods?.find((item)=> item.slug  === prod.slug)?.category}/${prods?.find((item)=> item.slug  === prod.slug)?.id}`}><ButtonChokolate /></Link>
                                        
                                    </div>  
                                )
                            })}

                        </div>
                    )
                })}
                
            </section>
              
        </main>
        <ProductSection />
        <div style={{paddingBottom:"2rem"}}></div>
        <MainBottom />

        </>
       
      
    )
}


export default Product;