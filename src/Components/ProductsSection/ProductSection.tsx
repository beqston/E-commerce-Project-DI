import classname from "./style.module.scss"
import ButtonShop from "../button/ButtonShop"
import item1 from "../../assets/Photos/ProdSection/item1.png"
import item2 from "../../assets/Photos/ProdSection/item2.png"
import item3 from "../../assets/Photos/ProdSection/item3.png"
import oval1 from "../../assets/Photos/ProdSection/oval1.svg"
import oval2 from "../../assets/Photos/ProdSection/oval2.svg"
import oval3 from "../../assets/Photos/ProdSection/oval3.svg"
import { Link } from "react-router-dom"

const ProductSection = ()=> {
    return(
        <section className={classname['fixed-prod-secrtion']}>

            <div className={classname['secrtion-container']}>

                <div className={classname['item']}>
                    <div className={classname['img-container']}>
                        <div className={classname['item-img']}>
                            <img src={item1} alt="photo" />
                        </div>
                        <div className={classname['oval']}>
                            <img src={oval1} alt="photo" />
                        </div>
                    </div>
                    <h4>HEADPHONES</h4>
                    <Link to={'/products/headphones'}><ButtonShop /></Link>
                </div>

                <div className={classname['item']}>
                <div className={classname['img-container']}>
                    
                        <div className={classname['item-img']}>
                            <img src={item2} alt="photo" />
                        </div>
                        <div className={classname['oval']}>
                            <img src={oval2} alt="photo" />
                        </div>
                    </div>
                    <h4>SPEAKERS</h4>
                    <Link to={'/products/speakers'}><ButtonShop /></Link>
                </div>

                <div className={classname['item']}>
                <div className={classname['img-container']}>
                        <div className={classname['item-img']}>
                            <img src={item3} alt="photo" />
                        </div>
                        <div className={classname['oval']}>
                            <img src={oval3} alt="photo" />
                        </div>
                    </div>
                    <h4>EARPHONES</h4>
                    <Link to={'/products/earphones'}><ButtonShop /></Link>
                </div>
            </div>
        </section>
    )
}

export default ProductSection;